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

export const getUAdmins = async (req,res,next)=>{
    const UAdmins = await userModel.findAll({
        where:{
            role:"university_admin"
        }
    });
    return res.status(200).json({message:"success", UAdmins});
}

export const getUAdmin = async (req,res,next)=>{
    const {id} = req.params;
    const UAdmin = await userModel.findByPk(id);
    if(!UAdmin){
        return next(new AppError("incorrect id!", 404));
    }
    return res.status(200).json({message:"success",UAdmin});
}