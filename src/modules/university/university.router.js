import { Router } from "express";
import { auth } from "../../midleware/auth.js";
import validation from "../../midleware/validation.js";
import { createUniversitySchema, getUniversitySchema } from "./university.validation.js";
import { asyncHandler } from "../../utils/catchError.js";
import { createUniversity, getAllUniversities, getUniversity } from "./university.controller.js";



const router = Router();

router.post('/',auth(['admin']), validation(createUniversitySchema), asyncHandler(createUniversity));
router.get('/', auth(['admin']), asyncHandler(getAllUniversities));
router.get('/u', auth(['admin', 'student','instructor','university_admin']),validation(getUniversitySchema),asyncHandler(getUniversity));


export default router;