const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  isPrivate: {
    type: Boolean
  },
  password: {
    type: String,
    required: function() {
      return this.isPrivate === true;
    }
  },
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "image"
    }
  ]
});

const gallery = mongoose.model("gallery", GallerySchema);
module.exports = gallery;
