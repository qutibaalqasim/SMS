import { Router } from "express";
import { auth } from "../../midleware/auth.js";
import validation from "../../midleware/validation.js";
import { createUniversitySchema } from "./university.validation.js";
import { asyncHandler } from "../../utils/catchError.js";
import { createUniversity } from "./university.controller.js";



const router = Router();

router.post('/',auth(['admin']), validation(createUniversitySchema), asyncHandler(createUniversity));


export default router;