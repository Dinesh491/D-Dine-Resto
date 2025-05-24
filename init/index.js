const mongoose = require("mongoose");
const appetizersData = require("./appetizers.js");
const mainCoursesData = require("./mainCourse.js");
const beveragesData = require("./beverages.js");
const dessertsData = require("./desserts.js");
const mandisData = require("./mandi.js");
const Menu = require("../models/menu");

const MONGO_URL = "mongodb://127.0.0.1:27017/ddineresto";

main()
.then((res) => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
};

const allData = [
    ...appetizersData,
    ...mainCoursesData,
    ...beveragesData,
    ...dessertsData,
    ...mandisData,
];

const initDB = async() => {
    await Menu.deleteMany({});
    await Menu.insertMany(allData);
    console.log("Data Base Initialized")
};

initDB();