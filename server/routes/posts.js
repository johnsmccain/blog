const router = require("express").Router();
const Post = require("../models/Post");

// CREATE POST
router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const post = await newPost.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(401).json("something went wrong");
  }
});
// UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          {
            new: true,
          }
        );
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json("Something went wrong!");
      }
    } else {
      res.status(401).json("You can only update your post!");
    }
  } catch (error) {
    res.status(500).json("bad connection");
  }
});
// DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === res.body.username) {
      try {
        await post.delete();
        res.status(200).json("post has been deleted");
      } catch (error) {
        res.status(500).json("Try again");
      }
    } else {
      res.json("you can only delete your post");
    }
  } catch (error) {
    res.status(500).json("Something went wrong!");
  }
});
// GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json("something went wrong ", error);
  }
});
// GET ALL POSTs
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json("Something went wrong", error);
  }
});
module.exports = router;
