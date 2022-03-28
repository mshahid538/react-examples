const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema(
  {
    Buyers: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Buyers",
    },
    orderitems: [
      {
        Items: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Items",
        },
        quantity: {
          type: Number,
          default: 1,
        },
        name: { type: String },
      },
    ],

    balance: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", ordersSchema);
