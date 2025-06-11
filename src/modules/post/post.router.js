import { Router } from "express";
import { auth } from "../../midleware/auth.js";
import { asyncHandler } from "../../utils/catchError.js";
import { createPost } from "./post.controller.js";
import fileUpload from "../../utils/multer.js";



const router = Router();

router.post('/', auth(['instructor','admin','university_admin']),fileUpload().single('image'),asyncHandler(createPost));


export default router;