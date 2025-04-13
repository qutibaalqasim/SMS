import { Router } from "express";
import { auth } from "../../midleware/auth.js";
import validation from "../../midleware/validation.js";
import { createUAdminSchema, deleteUAdminSchema, getUAdminSchema } from "./universityAdmin.validation.js";
import { asyncHandler } from "../../utils/catchError.js";
import { createUAdmin, deleteUAdmin, getUAdmin, getUAdmins } from "./universityAdmin.controller.js";


const router = Router();

router.post('/',auth(['admin']),validation(createUAdminSchema), asyncHandler(createUAdmin));
router.get('/', auth(['admin']), asyncHandler(getUAdmins));
router.get('/:id', auth(['admin']), validation(getUAdminSchema), asyncHandler(getUAdmin));
router.delete('/:id',auth(['admin']), validation(deleteUAdminSchema), asyncHandler(deleteUAdmin));

export default router;