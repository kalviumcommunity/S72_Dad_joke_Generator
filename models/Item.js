
const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
});

module.exports = mongoose.model("Item", ItemSchema);
