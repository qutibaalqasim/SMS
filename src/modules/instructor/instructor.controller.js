import { Op } from "sequelize";
import userModel from "../../../DB/models/user.model.js"
import { AppError } from "../../utils/AppError.js";


export const getAllInstructors = async(req,res,next)=>{
    const instructors = await userModel.findAll({
        where:{
            role:"instructor"
        }
    });
    return res.status(200).json({message:"success", instructors});
}

export const getUniversityInstructors = async (req,res,next)=>{
    const {universityId} = req.params;
    const instructors = await userModel.findAll({
        where:{
            [Op.and]:[
                {role:'instructor'},
                {universityId}
            ]
        }
    });
    if(!instructors){
        return next(new AppError("instructors not found",404));
    }
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
        return next(new AppError("instructor not found", 404));
    }
    return res.status(200).json({message:"success",instructor});
}

export const deleteInstructor = async (req,res,next)=>{
    const {universityNum} = req.body;
    const instructor = await userModel.findOne({
        where:{
            [Op.and]:[
                {universityNum},
                {role:'instructor'}
            ]
        }
    });
    if(!instructor){
        return next(new AppError("instructor not found", 404));
    }
    await instructor.destroy();
    return res.status(200).json({message:"success"});
}

export const updateInstructor = async (req,res,next)=>{
    const {id} = req.params;
    if(req.id != id){
        return next(new AppError("unouthrized!!", 403));
    }
    const instructor = await userModel.findOne({
        where:{
            [Op.and]:[
                {id},
                {role:'instructor'}
            ]
        }
    });
    if(!instructor){
        return next(new AppError("instructor not found", 404));
    }
    await instructor.update(req.body);
    return res.status(200).json({message:"success"});
}