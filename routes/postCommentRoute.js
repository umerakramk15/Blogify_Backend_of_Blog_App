import express from "express";
import {
  AddPostCommentController,
  deletePostCommentController,
  fetchAllSinglePostComment,
} from "../controller/postCommentController.js";

const router = express.Router();

router.get("/fetchAll-comment/:postId", fetchAllSinglePostComment);
router.post("/create-comment/:postId/:userId", AddPostCommentController);
router.delete("/delete-comment/:id", deletePostCommentController);

export default router;
