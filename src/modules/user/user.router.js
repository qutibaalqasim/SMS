import { Router } from "express";
import { asyncHandler } from "../../utils/catchError.js";
import { deleteUser, getStudents, getUsers, updateImage } from "./user.controller.js";
import auth from "../../midleware/auth.js";
import validation from "../../midleware/validation.js";
import { deleteSchema, updateSchema } from "./user.validation.js";
import fileUpload from "../../utils/multer.js";


const router = Router();
//get all the users 
router.get('/',auth(), asyncHandler(getUsers));
//get all the students
router.get('/getAllStudents',auth(), asyncHandler(getStudents));
 //delete a user by id
router.delete('/:id',validation(deleteSchema), auth(),asyncHandler(deleteUser));
 //update a user image by id
router.put('/:id', validation(updateSchema), fileUpload().single('image'), asyncHandler(updateImage));



export default router;