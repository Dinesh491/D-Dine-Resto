const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dineInOrderSchema = new Schema({
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
    tableNumber: {
        type: Number,
        required: function () {
            return this.orderType === "dineIn";
        }
    },
    orderText: {
        type: String,
        default: "Empty",
    },
    finalAmount: {
        type: Number,
        required: true,
    },
    gstAmount: {
        type: Number,
        required: true,
    },
    itemTotal: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

const dineInOrder = mongoose.model("dineInOrder", dineInOrderSchema);
module.exports = dineInOrder;
