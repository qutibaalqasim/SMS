import { Router } from "express";
import { asyncHandler } from "../../utils/catchError.js";
import { createReaction, deleteReaction } from "./reaction.controller.js";
import { auth } from "../../midleware/auth.js";



const router = Router({mergeParams: true});

router.post('/', auth(['student','instructor','admin','university_admin']), asyncHandler(createReaction));
router.delete('/', auth(['student','instructor','admin','university_admin']), asyncHandler(deleteReaction));







export default router;