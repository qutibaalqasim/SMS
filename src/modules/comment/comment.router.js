import { Router } from "express";
import { createComment, getPostComments } from "./comment.controller.js";
import { asyncHandler } from "../../utils/catchError.js";
import { auth } from "../../midleware/auth.js";



const router = Router();

router.post('/',auth(['student','instructor','admin','university_admin']), asyncHandler(createComment));
router.get('/:postId', auth(['student','instructor','admin','university_admin']), asyncHandler(getPostComments));





export default router;