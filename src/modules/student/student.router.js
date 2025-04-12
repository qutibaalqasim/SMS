import { Router } from "express";
import { auth } from "../../midleware/auth.js";
import { asyncHandler } from "../../utils/catchError.js";
import { getAllStudents, getStudent, getUniversityStudents } from "./student.controller.js";
import validation from "../../midleware/validation.js";
import { getUniversityStudentsSchema } from "./student.validation.js";



const router = Router();

router.get('/', auth(['admin']), asyncHandler(getAllStudents));
router.get('/UStudent', auth(['admin', 'university_admin']),validation(getUniversityStudentsSchema), asyncHandler(getUniversityStudents));
router.get('/:id',auth(['admin', 'university_admin']), asyncHandler(getStudent));
export default router;