import { Op } from "sequelize";
import userModel from "../../../DB/models/user.model.js"


export const getAllInstructors = async(req,res,next)=>{
    const instructors = await userModel.findAll({
        where:{
            role:"instructor"
        }
    });
    return res.status(200).json({message:"success", instructors});
}

export const getUniversityInstructors = async (req,res,next)=>{
    const {universityName} = req.body;
    const instructors = await userModel.findAll({
        where:{
            [Op.and]:[
                {role:'instructor'},
                {universityName}
            ]
        }
    });
    return res.status(200).json({message:"success", instructors});
}

export const getInstructor = async(req,res,next)=>{
    const {id} = req.params;
    const instructor = await userModel.findOne({
        where:{
            [Op.and]:[
                {id},
                {role:'instructor'}
            ]
        }
    });
    if(!instructor){
        return next(new AppError("incorrect id!!", 404));
    }
    return res.status(200).json({message:"success",instructor});
}