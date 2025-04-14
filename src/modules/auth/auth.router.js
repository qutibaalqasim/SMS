import { Router } from "express";
import validation from "../../midleware/validation.js";
import { loginSchema, registerSchema, resetPasswordSchema, sendCodeSchema } from "./auth.validation.js";
import { confirmEmail, login, register, resetPassword, sendCode } from "./auth.controller.js";
import { asyncHandler } from "../../utils/catchError.js";


const router = Router();

router.post('/register' , validation(registerSchema), asyncHandler(register));
router.get('/confirmEmail', asyncHandler(confirmEmail));
router.post('/login', validation(loginSchema), asyncHandler(login));
router.post('/sendCode', validation(sendCodeSchema), asyncHandler(sendCode));
router.post('/forgetPassword', validation(resetPasswordSchema), asyncHandler(resetPassword));

export default router;