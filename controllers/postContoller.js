const Post = require("../models/postModel");

// Add new post
const addPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all posts + filter by sender
const getAllPosts = async (req, res) => {
  try {
    // if user entered a sender to filter by
    if (req.query.sender) {
      return res.json(await Post.find({ sender: req.query.sender }));
    }
    // else - get all posts
    res.json(await Post.find());
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get post by ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update post by ID
const updatePost = async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.expors = {addPost, getAllPosts, getPostById, updatePost};