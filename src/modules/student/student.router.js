import { Router } from "express";
import { auth } from "../../midleware/auth.js";
import { asyncHandler } from "../../utils/catchError.js";
import { deleteStudent, getAllStudents, getStudent, getUniversityStudents } from "./student.controller.js";
import validation from "../../midleware/validation.js";
import { deleteStudentSchema, getStudentSchema, getUniversityStudentsSchema } from "./student.validation.js";



const router = Router();

router.get('/', auth(['admin']), asyncHandler(getAllStudents));
router.get('/UStudent', auth(['admin', 'university_admin']),validation(getUniversityStudentsSchema), asyncHandler(getUniversityStudents));
router.get('/:id',auth(['admin', 'university_admin']), validation(getStudentSchema), asyncHandler(getStudent));
router.delete('/',auth(['admin', 'university_admin']), validation(deleteStudentSchema), asyncHandler(deleteStudent));
export default router;