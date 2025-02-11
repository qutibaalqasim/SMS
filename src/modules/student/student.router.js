import { Router } from "express";
import { asyncHandler } from "../../utils/catchError.js";
import { addStudent, deleteStudent, getStudents, updateStudent, updateStudentImg } from "./student.controller.js";
import validation from "../../midleware/validation.js";
import { studentSchema, validateID } from "./student.validation.js";
import authSt from "../../midleware/auth.st.js";
import fileUpload from "../../utils/multer.js";



const router = Router();
//get students who are added by the specific user
router.get('/',authSt(), asyncHandler(getStudents));
 //add new student
router.post('/',authSt(),validation(studentSchema), asyncHandler(addStudent));
//delete student by the user who added them
router.delete('/:id',authSt(),validation(validateID), asyncHandler(deleteStudent));
 //update student details by the user who added them
router.put('/:id', authSt(),validation(validateID), asyncHandler(updateStudent));
 //update student picture by the user who added them
router.put('/newImage/:id', authSt(),validation(validateID),fileUpload().single('image'), asyncHandler(updateStudentImg));


export default router;