const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: String,
  email: String,
  jobTitle: String,
  company: String,
  phone: String,
  logo: String, // store path to uploaded image
});

module.exports = mongoose.model("Card", cardSchema);
