import { Router } from "express";
import { createComment } from "./comment.controller.js";
import { asyncHandler } from "../../utils/catchError.js";
import { auth } from "../../midleware/auth.js";



const router = Router();

router.post('/',auth(['student','instructor','admin','university_admin']), asyncHandler(createComment));





export default router;