import studentModel from "../../../DB/models/student.model.js";
import userModel from "../../../DB/models/user.model.js";
import { AppError } from "../../utils/AppError.js";


export const getStudents = async (req,res)=>{
    const userId = req.id;
    const students = await studentModel.findAll({
        attributes:['id', 'studentName', 'university', 'grade'],
        where:{userId},
        include:{
            model: userModel,
            attributes:['id','userName'],
        }
    });
    return res.status(200).json({message:"success", students});
}


export const addStudent = async (req,res)=>{
    const {studentName,university,grade} = req.body;
    const student = await studentModel.create({studentName,university,grade, UserId:req.id});
    return res.status(201).json({message:"student added successfully", student});
}


export const deleteStudent = async (req,res,next)=>{
    const {id} = req.params;
    const student = await studentModel.findByPk(id);
    if(student == null){
        return next(new AppError("Student not found",404));
    }
    const check = student;
    if(check.UserId != req.id){
        return next(new AppError("Unauthorized to delete this student",401));
    }
    await student.destroy({
        where:{
            id
        }
    });
    return res.status(200).json({message:"student deleted successfully"});
}