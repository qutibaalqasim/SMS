import studentModel from "../../../DB/models/student.model.js";
import userModel from "../../../DB/models/user.model.js";
import { AppError } from "../../utils/AppError.js";
import cloudinary from "../../utils/cloudinary.js";



export const getUsers = async (req,res)=>{
    const users = await userModel.findAll({
        attributes: ['id', 'userName', 'email'],
    });

    return res.status(200).json({message:"success" , users});
}
export const getAllStudents = async (req,res)=>{
    const students = await studentModel.findAll({
        attributes:['id', 'studentName', 'university', 'grade'],
        include:{
            model: userModel,
            attributes:['id','userName'],
        }
    });

    return res.status(200).json({message:"success", students});
}


export const deleteUser = async (req,res,next)=>{
        const {id} = req.params;
        const user = await userModel.findByPk(id);
        if(user == null){
            return next(new AppError("user not found",404));
        }

        await user.destroy({
            where:{
                id
            }
        });
        return res.status(200).json({message:"User deleted successfully"});
}

export const deleteStudent = async (req,res,next)=>{
    const {id} = req.params;
    const student = await studentModel.findByPk(id);
    if(student == null){
        return next(new AppError("student not found",404));
    }
    await student.destroy({
        where:{
            id
        }
    });
    return res.status(200).json({message:"Student deleted successfully"});
}


export const updateImage = async (req,res,next)=>{
    const {id} = req.params;
    const user = await userModel.findByPk(id);
    if(user == null){
        return next(new AppError("user not found",404));
    }

    const {secure_url} = await cloudinary.uploader.upload(req.file.path);
    user.profilePic = secure_url;
    await user.save();

    return res.status(200).json({message:"updated user profilepic successfully"});
}