import { Router } from "express";
import { auth } from "../../midleware/auth.js";
import { asyncHandler } from "../../utils/catchError.js";
import { createPost, deletePost, getPostDetails, getPosts, getUserPosts, updatePost } from "./post.controller.js";
import fileUpload from "../../utils/multer.js";



const router = Router();

router.post('/', auth(['instructor','admin','university_admin']),fileUpload().array('images', 5),asyncHandler(createPost));
router.get('/', auth(['admin']), asyncHandler(getPosts));
router.get('/user', auth(['instructor','admin','university_admin']), asyncHandler(getUserPosts));
router.get('/:postId', auth(['admin']), asyncHandler(getPostDetails));
router.put('/:postId', auth(['instructor','admin','university_admin']), fileUpload().array('images', 5), asyncHandler(updatePost));
router.delete('/:postId', auth(['instructor','admin','university_admin']), asyncHandler(deletePost));

export default router;