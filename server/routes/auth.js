const router = require("express").Router();
const User = require("../models/User");
const bcript = require("bcrypt");

// Register
router.post("/register", async (req, res) => {
  const salt = await bcript.genSalt(10);
  const hashedPassword = await bcript.hash(req.body.password, salt);
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credencials");

    const validated = await bcript.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong passwords");
    const { password, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
});

module.exports = router;
