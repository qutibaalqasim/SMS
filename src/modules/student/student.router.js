import { Router } from "express";
import { asyncHandler } from "../../utils/catchError.js";
import { addStudent, deleteStudent, getStudents, updateStudent, updateStudentImg } from "./student.controller.js";
import validation from "../../midleware/validation.js";
import { studentSchema, validateID } from "./student.validation.js";
import authSt from "../../midleware/auth.st.js";
import fileUpload from "../../utils/multer.js";



const router = Router();

router.get('/',authSt(), asyncHandler(getStudents));
router.post('/',authSt(),validation(studentSchema), asyncHandler(addStudent));
router.delete('/:id',authSt(),validation(validateID), asyncHandler(deleteStudent));
router.put('/:id', authSt(),validation(validateID), asyncHandler(updateStudent));
router.put('/newImage/:id', authSt(),validation(validateID),fileUpload().single('image'), asyncHandler(updateStudentImg));


export default router;