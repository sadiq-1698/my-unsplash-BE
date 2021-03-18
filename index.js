const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const imageRoutes = require("./routes/image");
const galleryRoutes = require("./routes/gallery");

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(express.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("/image", imageRoutes);
app.use("/gallery", galleryRoutes);

app.get("/", function(_, res) {
  res.send("This application is live!");
});

app.listen(3002, function() {
  console.log("Example app listening on port 3002!");
});
