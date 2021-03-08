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
  galleryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "gallery",
    required: true
  }
});

const image = mongoose.model("image", ImageSchema);
module.exports = image;
