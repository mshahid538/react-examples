const mongoose = require("mongoose");

const cartsSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
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

module.exports = mongoose.model("Carts", cartsSchema);
