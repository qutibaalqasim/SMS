import { Router } from "express";
import { asyncHandler } from "../../utils/catchError.js";
import { addStudent, deleteStudent, getStudents, updateStudent } from "./student.controller.js";
import validation from "../../midleware/validation.js";
import { studentSchema, validateID } from "./student.validation.js";
import authSt from "../../midleware/auth.st.js";



const router = Router();

router.get('/',authSt(), asyncHandler(getStudents));
router.post('/',authSt(),validation(studentSchema), asyncHandler(addStudent));
router.delete('/:id',authSt(),validation(validateID), asyncHandler(deleteStudent));
router.put('/:id', authSt(),validation(validateID), asyncHandler(updateStudent));



export default router;