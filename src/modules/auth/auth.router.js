import { Router } from "express";
import validation from "../../midleware/validation.js";
import { confirmSchema, loginSchema, registerSchema } from "./auth.validation.js";
import { confirmEmail, login, register } from "./auth.controller.js";
import { asyncHandler } from "../../utils/catchError.js";


const router = Router();

router.post('/register' , validation(registerSchema), asyncHandler(register));
router.get('/confirmEmail/:token', validation(confirmSchema), asyncHandler(confirmEmail));
router.post('/login', validation(loginSchema), asyncHandler(login));



export default router;