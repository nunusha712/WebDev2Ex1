const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  sender: String,
  message: String
}, { timestamps: true });

module.exports = mongoose.model("Comment", CommentSchema);
