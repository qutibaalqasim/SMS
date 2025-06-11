import { Op } from "sequelize";
import userModel from "../../../DB/models/user.model.js"
import { AppError } from "../../utils/AppError.js";
import cloudinary from "../../utils/cloudinary.js";


export const getAllStudents = async(req,res,next)=>{
    const students = await userModel.findAll({
        where:{
            role:'student'
        }
    });
    return res.status(200).json({message:"success", students});
}

export const getUniversityStudents = async(req,res,next)=>{
    const {id} = req.params;
    const students = await userModel.findAll({
        where:{
            [Op.and]:[
                {role:'student'},
                {universityId:id}
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
        return next(new AppError("student not found", 404));
    }
    return res.status(200).json({message:"success",student});
}

export const deleteStudent = async (req,res,next)=>{
    const {id} = req.params;
    const student = await userModel.findOne({
        where:{
            [Op.and]:[
                {id},
                {role:'student'}
            ]
        }
    });
    if (!student) {
        return next(new AppError("student not found", 404));
      }
    await student.destroy();
    return res.status(200).json({message:"success"});
}

export const updateStudent = async(req,res,next)=>{
    const {id} = req.params;
    if(req.id != id){
        return next(new AppError("unouthrized!!", 403));
    }
    const student = await userModel.findOne({
        where:{
            [Op.and]:[
                {id},
                {role:'student'}
            ]
        }
    });
    if(!student){
        return next(new AppError("student not found", 404));
    }
    await student.update(req.body);
    return res.status(200).json({message:"success"});
}

// for updating profile image for all users
export const updateProfileImage = async (req,res,next)=>{
    const {id} = req.params;
    if(id != req.id){
        return next(new AppError("unothrized", 403));
    }
    const user = await userModel.findByPk(id);
    if(!user){
        return next(new AppError("user not found!", 404));
    }
    const {secure_url} = await cloudinary.uploader.upload(req.file.path);
    if(!req.file){
        return next(new AppError("there is no image to upload!", 404));
    }
    user.profilePic = secure_url;
    await user.save();
    return res.status(200).json({message:"success"});
}
