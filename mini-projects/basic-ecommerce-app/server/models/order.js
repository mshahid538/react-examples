const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: String },
  item: [
    {
      itemId: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 1,
      },
      balance: {
        type: Number,
      },
    },
  ],
  dateAdded: {
    timestamps: new Date(),
  },
});

module.exports = mongoose.model("Order", orderSchema);
