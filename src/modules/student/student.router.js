import { Router } from "express";
import { asyncHandler } from "../../utils/catchError.js";
import { getStudents } from "./student.controller.js";



const router = Router();

router.get('/', asyncHandler(getStudents));



export default router;