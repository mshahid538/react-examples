const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
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
});

module.exports = mongoose.model("Cart", cartSchema);
