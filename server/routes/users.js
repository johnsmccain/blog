const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { rawListeners } = require("../models/User");

const Post = require("../models/Post");
// UPDATE
router.put("/:id", async (req, res) => {
  const reqBody = req.body;
  if (reqBody.userId === req.params.id) {
    if (reqBody.password) {
      const salt = await bcrypt.genSalt(10);
      reqBody.password = await bcrypt.hash(reqBody.password, salt);
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: reqBody,
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.json("you can only update your account");
  }
});
// DELETE
router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (req.body.userId === req.params.id) {
    if (user) {
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted ....");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(404).json("User not found");
    }
  } else {
    res.status(401).json("You can only delete your account");
  }
});
// GET user
router.get("/:id", async (req, res) => {
  try {
    const getUser = await User.findById(req.params.id);
    const { password, ...others } = getUser._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(400).json("User nnot found");
  }
});

module.exports = router;
