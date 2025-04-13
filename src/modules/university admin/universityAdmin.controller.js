import userModel from "../../../DB/models/user.model.js";
import { AppError } from "../../utils/AppError.js";



export const createUAdmin = async (req,res,next)=>{
    const {universityId} = req.body;
    const user = await userModel.findOne({
        where:{
            universityId
        }
    });
    if(!user){
        return next(new AppError("incorrect universityId!", 404));
    }
    user.role = 'university_admin';
    await user.save();
    return res.status(201).json({message:"success", user});
}