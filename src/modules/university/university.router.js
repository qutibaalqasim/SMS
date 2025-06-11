import { Router } from "express";
import { auth } from "../../midleware/auth.js";
import validation from "../../midleware/validation.js";
import { createUniversitySchema, deleteUniversitySchema, getUniversitySchema, updateUniversitySchema } from "./university.validation.js";
import { asyncHandler } from "../../utils/catchError.js";
import { createUniversity, deleteUniversity, getAllUniversities, getUniversity, updateUniversity } from "./university.controller.js";



const router = Router();

router.post('/',/*auth(['admin']),*/ validation(createUniversitySchema), asyncHandler(createUniversity));
router.get('/', auth(['admin']), asyncHandler(getAllUniversities));
router.get('/:id', auth(['admin','university_admin']),validation(getUniversitySchema),asyncHandler(getUniversity));
router.delete('/:id', auth(['admin']), validation(deleteUniversitySchema), asyncHandler(deleteUniversity));
router.put('/:id', auth(['university_admin']),validation(updateUniversitySchema), asyncHandler(updateUniversity));


export default router;