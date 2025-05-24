const mongoose = require("mongoose");
const appetizersData = require("./appetizers.js");
const mainCoursesData = require("./mainCourse.js");
const beveragesData = require("./beverages.js");
const dessertsData = require("./desserts.js");
const mandisData = require("./mandi.js");
const Menu = require("../models/menu");

// ✅ Atlas DB connection string with db name
const ATLASDB_URL = "mongodb+srv://d-dine-resto:jcLsGwqpfoS0rR08@cluster0.ucz1o97.mongodb.net/ddineresto?retryWrites=true&w=majority&appName=Cluster0";

main()
  .then(() => {
    console.log("Connected to Atlas DB");
    return initDB();
  })
  .catch((err) => {
    console.error("Connection failed:", err);
  });

async function main() {
  await mongoose.connect(ATLASDB_URL);
}

const allData = [
  ...appetizersData,
  ...mainCoursesData,
  ...beveragesData,
  ...dessertsData,
  ...mandisData,
];

const initDB = async () => {
  await Menu.deleteMany({});
  await Menu.insertMany(allData);
  console.log("✅ Database Initialized with Menu Items");
  mongoose.connection.close();
};
