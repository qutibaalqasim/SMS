import { Router } from "express";
import { asyncHandler } from "../../utils/catchError.js";
import { addStudent, getStudents } from "./student.controller.js";
import validation from "../../midleware/validation.js";
import { studentSchema } from "./student.validation.js";
import authSt from "../../midleware/auth.st.js";



const router = Router();

router.get('/',authSt(), asyncHandler(getStudents));
router.post('/',authSt(),validation(studentSchema), asyncHandler(addStudent));


export default router;