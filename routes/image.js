const express = require("express");
const router = express.Router();

const ImageController = require("../controllers/image");

router.get("/all", ImageController.get_all_images);

router.get("/:id", ImageController.get_an_image);

router.post("/add", ImageController.add_new_image);

router.delete("/:id", ImageController.delete_image);

module.exports = router;
