import { Router } from "express";
import { asyncHandler } from "../../utils/catchError.js";
import { deleteStudent, deleteUser, getAllStudents, getUsers, updateImage } from "./user.controller.js";
import auth from "../../midleware/auth.js";
import validation from "../../midleware/validation.js";
import {idValidate } from "./user.validation.js";
import fileUpload from "../../utils/multer.js";


const router = Router();
//get all the users 
router.get('/',auth(), asyncHandler(getUsers));
//get all the students
router.get('/getAllStudents',auth(), asyncHandler(getAllStudents));
 //delete a user by id
router.delete('/:id', auth(),validation(idValidate),asyncHandler(deleteUser));
//delete any student by the admin
router.delete('/stDelete/:id', auth(), validation(idValidate), asyncHandler(deleteStudent));
 //update a user image by id
router.put('/:id', validation(idValidate), fileUpload().single('image'), asyncHandler(updateImage));



export default router;