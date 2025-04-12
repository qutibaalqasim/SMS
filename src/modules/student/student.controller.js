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