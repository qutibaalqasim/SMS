import userModel from "../../../DB/models/user.model.js"
import { AppError } from "../../utils/AppError.js";


export const getAllStudents = async(req,res,next)=>{
    const student = await userModel.findAll({
        where:{
            role:'student'
        }
    });
    return res.status(200).json({message:"success", student});
}

