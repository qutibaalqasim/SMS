import { Router } from "express";
import { asyncHandler } from "../../utils/catchError.js";
import { deleteInstructor, getAllInstructors, getInstructor, getUniversityInstructors, updateInstructor } from "./instructor.controller.js";
import { auth } from "../../midleware/auth.js";
import validation from "../../midleware/validation.js";
import { deleteInstructorSchema, getInstructorSchema, getUniversityInstructorsSchema, updateInstructorSchema } from "./instructor.validation.js";



const router = Router();

router.get('/', auth(['admin']), asyncHandler(getAllInstructors));
router.get('/UInstructor/:universityId', auth(['admin', 'university_admin']),validation(getUniversityInstructorsSchema), asyncHandler(getUniversityInstructors));
router.get('/:id', auth(['admin', 'university_admin']),validation(getInstructorSchema), asyncHandler(getInstructor));
router.delete('/',auth(['admin', 'university_admin']), validation(deleteInstructorSchema), asyncHandler(deleteInstructor));
router.put('/:id', auth(['instructor']), validation(updateInstructorSchema), asyncHandler(updateInstructor));
export default router;