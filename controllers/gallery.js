const galleryModel = require("../models/gallery");

exports.add_new_gallery = async (req, res) => {
  const gallery = new galleryModel({
    name: req.body.name,
    isPrivate: req.body.isPrivate,
    password: req.body.password
  });

  try {
    const result = await gallery.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.delete_gallery = async (req, res) => {
  try {
    await galleryModel.deleteMany({ _id: req.params.id }, function(err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Gallery deleted");
      }
    });
  } catch (err) {
    res.send(err);
  }
};

exports.get_all_galleries = async (req, res) => {
  try {
    const galleries = await galleryModel.find({});
    if (!galleries) return res.send("Error fetching galleries");
    return res.send(galleries);
  } catch (err) {
    res.send(err);
  }
};

exports.get_a_gallery = async (req, res) => {
  try {
    await galleryModel.findById(req.params.id, (err, gallery) => {
      if (err) {
        res.send(err);
      } else {
        res.send(gallery);
      }
    });
  } catch (err) {
    res.send(err);
  }
};
