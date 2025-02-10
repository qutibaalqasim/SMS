import { Router } from "express";
import { asyncHandler } from "../../utils/catchError.js";
import { getUsers } from "./user.controller.js";
import auth from "../../midleware/auth.js";


const router = Router();

router.get('/',auth(), asyncHandler(getUsers));



export default router;