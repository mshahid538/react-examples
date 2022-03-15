const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  userId: { type: String },
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
  dateAdded: {
    type: String,
  }, 
});

module.exports = mongoose.model("Orders", ordersSchema);
