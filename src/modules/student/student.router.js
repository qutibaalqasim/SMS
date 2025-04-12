import { Router } from "express";
import { auth } from "../../midleware/auth.js";
import { asyncHandler } from "../../utils/catchError.js";
import { getAllStudents } from "./student.controller.js";



const router = Router();

router.get('/', auth(['admin']), asyncHandler(getAllStudents));


export default router;