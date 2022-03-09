const mongoose = require("mongoose");
const ItemSchema = new mongoose.Schema(
  {
    name: { type: String },
    desc: { type: String },
    categories: { type: Array },
    price: { type: Number },
  },
  {
    date_added: {
      type: new Date(),
    },
  }
);

module.exports = mongoose.model("Item", ItemSchema);
