import { Op } from "sequelize";
import userModel from "../../../DB/models/user.model.js"
import { AppError } from "../../utils/AppError.js";


export const getAllStudents = async(req,res,next)=>{
    const students = await userModel.findAll({
        where:{
            role:'student'
        }
    });
    return res.status(200).json({message:"success", students});
}

export const getUniversityStudents = async(req,res,next)=>{
    const {universityName} = req.body;
    const students = await userModel.findAll({
        where:{
            [Op.and]:[
                {role:'student'},
                {universityName}
            ]
        }
    });
    return res.status(200).json({message:"success", students});
}

export const getStudent = async (req,res,next)=>{
    const {id} = req.params;
    const student = await userModel.findOne({
        where:{
            [Op.and]:[
                {id},
                {role:'student'}
            ]
        }
    });
    if(!student){
        return next(new AppError("incorrect id!!", 404));
    }
    return res.status(200).json({message:"success",student});
}

export const deleteStudent = async (req,res,next)=>{
    const {universityId} = req.body;
    const student = await userModel.findOne({
        where:{
            [Op.and]:[
                {universityId},
                {role:'student'}
            ]
        }
    });
    if(!student){
        return next(new AppError("incorrect universityId!!", 404));
    }
    await student.destroy();
    return res.status(200).json({message:"success"});
}

