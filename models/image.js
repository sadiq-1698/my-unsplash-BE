const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const image = mongoose.model("image", ImageSchema);
module.exports = image;
