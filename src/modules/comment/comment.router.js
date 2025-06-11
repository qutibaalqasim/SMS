import { Router } from "express";
import { createComment, deleteComment, getPostComments, updateComment } from "./comment.controller.js";
import { asyncHandler } from "../../utils/catchError.js";
import { auth } from "../../midleware/auth.js";



const router = Router({mergeParams: true});

router.post('/',auth(['student','instructor','admin','university_admin']), asyncHandler(createComment));
router.get('/', auth(['student','instructor','admin','university_admin']), asyncHandler(getPostComments));
router.put('/:commentId', auth(['student','instructor','admin','university_admin']), asyncHandler(updateComment));
router.delete('/:commentId', auth(['student','instructor','admin','university_admin']), asyncHandler(deleteComment));





export default router;