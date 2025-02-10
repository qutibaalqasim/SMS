import { Router } from "express";
import { asyncHandler } from "../../utils/catchError.js";
import { getUsers } from "./user.controller.js";


const router = Router();

router.get('/', asyncHandler(getUsers));



export default router;