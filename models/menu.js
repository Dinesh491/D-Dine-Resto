const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const menuSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    description : {
        type : String,
    },
    price : { 
        type : Number,
        required : true,
    },
    image : {
        url : String,
    },
    category : {
        type : String,
    },
    type : {
        type : String, 
        enum: ['veg', 'nonVeg'],
    },
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;