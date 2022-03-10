const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
  name: { type: String },
  desc: { type: String },
  categories: { type: Array },
  price: { type: Number },
  // dateAdded: {
  //   timestamps: new Date(),
  // },
});

module.exports = mongoose.model("Item", itemSchema);
