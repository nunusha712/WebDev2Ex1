const router = require("express").Router();
const {
  addPost,
  getAllPosts,
  getPostById,
  updatePost
} = require("../controllers/postContoller");

router.post("/", addPost);
router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.put("/:id", updatePost);

module.exports = router;
