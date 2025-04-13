import { Op } from "sequelize";
import universityModel from "../../../DB/models/university.model.js";
import { AppError } from "../../utils/AppError.js";


export const createUniversity = async (req,res,next)=>{
    const {name,email} = req.body;
    const check = await universityModel.findOne({
        where:{
            [Op.or]:[
                {name},
                {email}
            ]
        }
    });
    if(check){
        return next(new AppError("this name or email already exist", 400));
    }
    const university = await universityModel.create(req.body);
    return res.status(201).json({message:"success",university});  
}

export const getAllUniversities = async(req,res,next)=>{
    const universities = await universityModel.findAll();
    return res.status(200).json({message:"success",universities});
}

export const getUniversity = async (req,res,next)=>{
    const {name} = req.body;
    const university = await universityModel.findOne({
        where: {
            name
        }
    });
    if(!university){
        return next(new AppError("incorrect name!!", 404));
    }
    return res.status(200).json({message:"success",university});
}