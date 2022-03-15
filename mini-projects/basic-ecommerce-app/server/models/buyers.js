const mongoose = require("mongoose");
const buyersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }, 
  email: {
    type: String,
    required: true,
  }, 
  creationDate: {
    type: String,
  }, 
});

module.exports = mongoose.model("Buyers", buyersSchema);
