const router = require("express").Router();
const {
  newPost,
  updatePost,
  delPost,
  likePost,
  timelinePost,
} = require("../controlers/post");
const Post = require("../models/Post");
const User = require("../models/User");

//create a post

router.post("/", newPost);

//update a post

router.put("/:id", updatePost);

//delete a post

router.delete("/:id", delPost);

//like and dislike a post

router.put("/:id/like", likePost);

//get a post

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get timeline posts

router.get("/timeline/:userId", timelinePost);

module.exports = router;
