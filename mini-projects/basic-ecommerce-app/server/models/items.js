const mongoose = require("mongoose");
const itemsSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  desc: { type: String },
  category: { type: String }, 
  dateAdded: {
    type: String,
  }, 
});

module.exports = mongoose.model("Items", itemsSchema);
