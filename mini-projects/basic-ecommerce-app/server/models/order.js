const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
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
  date_added: {
    type: new Date(),
  },
});

module.exports = mongoose.model("Order", OrderSchema);
