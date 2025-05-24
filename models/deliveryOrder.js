const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deliveryOrderSchema = new Schema({
    orderType: {
        type: String,
        enum: ["dineIn", "delivery"],
        required: true,
    },
    items: [
        {
            id: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: "Item"
            },
            quantity: {
                type: Number,
                required: true,
            }
        }
    ],
    address: {
        customerName : { type: String, required: true },
        houseNumber: { type: String, required: true },
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: String, required: true },
        contactNumber: { type: String, required: true },
        nearby: { type: String }  // Optional field for nearby landmark
    },
    deliveryNumber: {
        type: String,
        default: function () {
            return Math.floor(Math.random() * 10000).toString();
        }
    },
    orderText: {
        type: String,
        default: "Empty",
    },
    gstAmount: {
        type: Number,
        required: true,
    },
    itemTotal: {
        type: Number,
        required: true,
    },
    finalAmount: {
        type: Number,
        required: true,
    },
    deliveryCharges: {
        type: Number,
        required: true,
    },
}, { timestamps: true });



const deliveryOrder = mongoose.model("deliveryOrder", deliveryOrderSchema);
module.exports = deliveryOrder;
