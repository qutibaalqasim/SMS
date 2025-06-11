import { Router } from "express";
import { auth } from "../../midleware/auth.js";
import { asyncHandler } from "../../utils/catchError.js";
import { createPost, getPostDetails, getPosts, getUserPosts } from "./post.controller.js";
import fileUpload from "../../utils/multer.js";



const router = Router();

router.post('/', auth(['instructor','admin','university_admin']),fileUpload().array('images', 5),asyncHandler(createPost));
router.get('/', auth(['admin']), asyncHandler(getPosts));
router.get('/user', auth(['instructor','admin','university_admin']), asyncHandler(getUserPosts));
router.get('/:postId', auth(['admin']), asyncHandler(getPostDetails));

export default router;