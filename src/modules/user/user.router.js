import { Router } from "express";
import { asyncHandler } from "../../utils/catchError.js";
import { deleteUser, getUsers, updateImage } from "./user.controller.js";
import auth from "../../midleware/auth.js";
import validation from "../../midleware/validation.js";
import { deleteSchema, updateSchema } from "./user.validation.js";
import fileUpload from "../../utils/multer.js";


const router = Router();

router.get('/',auth(), asyncHandler(getUsers));
router.delete('/:id',validation(deleteSchema), auth(),asyncHandler(deleteUser));
router.put('/:id', validation(updateSchema), fileUpload().single('image'), asyncHandler(updateImage));



export default router;