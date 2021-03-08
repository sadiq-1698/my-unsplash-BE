const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const imageRoutes = require("./routes/image");
const galleryRoutes = require("./routes/gallery");

mongoose.connect(
  "mongodb+srv://sadiq-1698:Iamtheboss1698@todo.rodyv.mongodb.net/my-unsplash?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(express.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Routes which should handle requests
app.use("/image", imageRoutes);
app.use("/gallery", galleryRoutes);

app.get("/", function(req, res) {
  res.send("Hello World!");
});

// app.get("/image/all", async (_, res) => {
//   try {
//     const images = await imageModel.find({});
//     if (!images) return res.send("Error fetching images");
//     return res.send(images);
//   } catch (err) {
//     res.send(err);
//   }
// });

// app.get("/gallery/all", async (_, res) => {
//   try {
//     const galleries = await galleryModel.find({});
//     if (!galleries) return res.send("Error fetching galleries");
//     return res.send(galleries);
//   } catch (err) {
//     res.send(err);
//   }
// });

// app.get("/gallery/:id", async (req, res) => {
//   try {
//     await galleryModel.findById(req.params.id, (err, gallery) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send(gallery);
//       }
//     });
//   } catch (err) {
//     res.send(err);
//   }
// });

// app.get("/image/:id", async (req, res) => {
//   try {
//     await imageModel.findById(req.params.id, (err, image) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send(image);
//       }
//     });
//   } catch (err) {
//     res.send(err);
//   }
// });

// app.post("/image/add", async (req, res) => {
//   const image = new imageModel({
//     label: req.body.label,
//     url: req.body.url,
//     galleryId: req.body.galleryId
//   });

//   try {
//     const result = await image.save();
//     res.send(result);
//   } catch (err) {
//     res.send(err);
//   }
// });

// app.post("/gallery/add", async (req, res) => {
//   const gallery = new galleryModel({
//     name: req.body.name,
//     isPrivate: req.body.isPrivate,
//     password: req.body.password
//   });

//   try {
//     const result = await gallery.save();
//     res.send(result);
//   } catch (err) {
//     res.send(err);
//   }
// });

// app.delete("/gallery/:id", async (req, res) => {
//   try {
//     await galleryModel.deleteMany({ _id: req.params.id }, function(err) {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send("Gallery deleted");
//       }
//     });
//   } catch (err) {
//     res.send(err);
//   }
// });

// app.delete("/image/:id", async (req, res) => {
//   try {
//     await imageModel.deleteMany({ _id: req.params.id }, function(err) {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send("Image deleted");
//       }
//     });
//   } catch (err) {
//     res.send(err);
//   }
// });

app.listen(3002, function() {
  console.log("Example app listening on port 3002!");
});
