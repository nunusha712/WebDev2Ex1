const router = require("express").Router();

const {
  addComment,
  getAllComments,
  getCommentById,
  updateComment,
  deleteComment,
  getCommentsByPost
} = require("../controllers/commentController");

// get comments CRUD routes
router.post("/", addComment);
router.get("/", getAllComments);
router.get("/:id", getCommentById);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

// get comments for specific post
router.get("/post/:postId", getCommentsByPost);

module.exports = router;
