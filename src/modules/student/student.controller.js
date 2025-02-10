import studentModel from "../../../DB/models/student.model.js";
import userModel from "../../../DB/models/user.model.js";


export const getStudents = async (req,res)=>{
    const students = await studentModel.findAll({
        attributes:['id', 'studentName', 'university', 'grade'],
        include:{
            model: userModel,
            attributes:['id','userName']
        }
    });

    return res.status(200).json({message:"success", students});
}