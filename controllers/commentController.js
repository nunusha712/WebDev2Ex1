const Comment = require("../models/commentModel");

// Create comment
const addComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all comments
const getAllComments = async (req, res) => {
  try {
    res.json(await Comment.find());
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get comment by ID
const getCommentById = async (req, res) => {
  try {
    res.json(await Comment.findById(req.params.id));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update comment
const updateComment = async (req, res) => {
  try {
    const updated = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete comment
const deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: "Comment deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get comments by post ID
const getCommentsByPost = async (req, res) => {
  try {
    res.json(await Comment.find({ postId: req.params.postId }));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
    addComment,
    getAllComments,
    getCommentById,
    updateComment,
    deleteComment,
    getCommentsByPost
}