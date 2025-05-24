const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const chefSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

chefSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Chef", chefSchema);
