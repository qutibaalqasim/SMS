import { Router } from "express";
import { asyncHandler } from "../../utils/catchError.js";
import { getAllInstructors, getInstructor, getUniversityInstructors } from "./instructor.controller.js";
import { auth } from "../../midleware/auth.js";
import validation from "../../midleware/validation.js";
import { getInstructorSchema, getUniversityInstructorsSchema } from "./instructor.validation.js";



const router = Router();

router.get('/', auth(['admin']), asyncHandler(getAllInstructors));
router.get('/UInstructor', auth(['admin', 'university_admin']),validation(getUniversityInstructorsSchema), asyncHandler(getUniversityInstructors));
router.get('/:id', auth(['admin', 'university_admin']),validation(getInstructorSchema), asyncHandler(getInstructor));
export default router;