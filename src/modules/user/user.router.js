import { Router } from "express";
import { asyncHandler } from "../../utils/catchError.js";
import { deleteUser, getUsers } from "./user.controller.js";
import auth from "../../midleware/auth.js";
import validation from "../../midleware/validation.js";
import { deleteSchema } from "./user.validation.js";


const router = Router();

router.get('/',auth(), asyncHandler(getUsers));
router.delete('/:id',validation(deleteSchema), auth(),asyncHandler(deleteUser));



export default router;