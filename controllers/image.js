const imageModel = require("../models/image");

exports.get_an_image = async (req, res) => {
  try {
    await imageModel.findById(req.params.id, (err, image) => {
      if (err) {
        res.send(err);
      } else {
        res.send(image);
      }
    });
  } catch (err) {
    res.send(err);
  }
};

exports.get_all_images = async (_, res) => {
  try {
    const images = await imageModel.find({});
    if (!images) return res.send("Error fetching images");
    images.reverse();
    return res.send(images);
  } catch (err) {
    res.send(err);
  }
};

exports.delete_image = async (req, res) => {
  try {
    await imageModel.deleteMany({ _id: req.params.id }, function(err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Image deleted");
      }
    });
  } catch (err) {
    res.send(err);
  }
};

exports.add_new_image = async (req, res) => {
  const image = new imageModel({
    label: req.body.label,
    url: req.body.url
  });

  try {
    const result = await image.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};
