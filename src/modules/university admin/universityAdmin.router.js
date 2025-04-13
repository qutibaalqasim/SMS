import { Router } from "express";
import { auth } from "../../midleware/auth.js";
import validation from "../../midleware/validation.js";
import { createUAdminSchema } from "./universityAdmin.validation.js";
import { asyncHandler } from "../../utils/catchError.js";
import { createUAdmin } from "./universityAdmin.controller.js";


const router = Router();

router.post('/',auth(['admin']),validation(createUAdminSchema), asyncHandler(createUAdmin));

export default router;