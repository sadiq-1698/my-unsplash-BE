const express = require("express");
const router = express.Router();

const GalleryController = require("../controllers/gallery");

router.get("/all", GalleryController.get_all_galleries);

router.get("/:id", GalleryController.get_a_gallery);

router.post("/add", GalleryController.add_new_gallery);

router.delete("/:id", GalleryController.delete_gallery);

module.exports = router;
