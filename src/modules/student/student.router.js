import { Router } from "express";
import { auth } from "../../midleware/auth.js";
import { asyncHandler } from "../../utils/catchError.js";
import { deleteStudent, getAllStudents, getStudent, getUniversityStudents, updateProfileImage, updateStudent } from "./student.controller.js";
import validation from "../../midleware/validation.js";
import { deleteStudentSchema, getStudentSchema, getUniversityStudentsSchema, updateImageSchema, updateStudentSchema } from "./student.validation.js";
import fileUpload from "../../utils/multer.js";



const router = Router();

router.get('/', auth(['admin']), asyncHandler(getAllStudents));
router.get('/u/:id', auth(['admin', 'university_admin']),validation(getUniversityStudentsSchema), asyncHandler(getUniversityStudents));
router.get('/:id',auth(['admin', 'university_admin']), validation(getStudentSchema), asyncHandler(getStudent));
router.delete('/:id',auth(['admin', 'university_admin']), validation(deleteStudentSchema), asyncHandler(deleteStudent));
router.put('/:id', auth(['student']), validation(updateStudentSchema), asyncHandler(updateStudent));
router.patch('/img/:id', auth(['admin', 'university_admin', 'student' , 'insructor']), validation(updateImageSchema),fileUpload().single('image'), asyncHandler(updateProfileImage));
export default router;