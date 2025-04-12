import { Router } from "express";
import { auth } from "../../midleware/auth.js";
import { asyncHandler } from "../../utils/catchError.js";
import { getAllStudents, getUniversityStudents } from "./student.controller.js";



const router = Router();

router.get('/', auth(['admin']), asyncHandler(getAllStudents));
router.get('/UStudent', auth(['admin', 'university_admin']), asyncHandler(getUniversityStudents));

export default router;