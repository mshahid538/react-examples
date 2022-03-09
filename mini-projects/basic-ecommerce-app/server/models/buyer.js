const mongoose = require("mongoose");
const buyerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "Admin",
  },
  // creationdate: {
  //   type: new Date(),
  // },
});

module.exports = mongoose.model("Buyer", buyerSchema);
