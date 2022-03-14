const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
dotenv.config();
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to mongodb"))
  .catch((err) => console.log(err));

app.use("/api", authRoute);

app.listen(5000, () => {
  console.log("connected to port 5000");
});
