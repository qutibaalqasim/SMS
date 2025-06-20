import { Op } from "sequelize";
import userModel from "../../../DB/models/user.model.js";
import { AppError } from "../../utils/AppError.js";



export const createUAdmin = async (req,res,next)=>{
    const {universityNum} = req.body;
    const user = await userModel.findOne({
        where:{
            universityNum
        }
    });
    if(!user){
        return next(new AppError("universityNum not found", 404));
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
    const UAdmin = await userModel.findOne({
        where:{
            [Op.and]:[
                {id},
                {role:"university_admin"}
            ]
        }
    });
    if(!UAdmin){
        return next(new AppError("uAdmin not found", 404));
    }
    return res.status(200).json({message:"success",UAdmin});
}

export const deleteUAdmin = async (req,res,next)=>{
    const {id} = req.params;
    const UAdmin = await userModel.findOne({
        where:{
            [Op.and]:[
                {id},
                {role:"university_admin"}
            ]
        }
    });
    if(!UAdmin){
        return next(new AppError("uAdmin not found", 404));
    }
    await UAdmin.destroy();
    return res.status(200).json({message:"success"});
}

export const updateUAdmin = async (req,res,next)=>{
    const {id} = req.params;
    if(req.id != id){
        return next(new AppError("unouthrized!!", 403));
    }
    const uAdmin = await userModel.findOne({
        where:{
            [Op.and]:[
                {id},
                {role:'university_admin'}
            ]
        }
    });
    if(!uAdmin){
        return next(new AppError("uAdmin not found", 404));
    }
    await uAdmin.update(req.body);
    return res.status(200).json({message:"success"});
}