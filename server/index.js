const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const { request } = require("express");
const path = require("path");
dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to mongodb"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    res.status(200).json("file has been uploaded");
  } catch (error) {
    res.status(500).json("Something went wrong", error);
  }
});
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/post", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(5000, () => {
  console.log("connected to port 5000");
});
