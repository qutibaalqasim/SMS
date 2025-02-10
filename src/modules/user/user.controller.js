import userModel from "../../../DB/models/user.model.js";
import { AppError } from "../../utils/AppError.js";



export const getUsers = async (req,res)=>{
    const users = await userModel.findAll({
        attributes: ['id', 'userName', 'email'],
    });

    return res.status(200).json({message:"success" , users});
}


export const deleteUser = async (req,res,next)=>{
        const {id} = req.params;
        const user = await userModel.findByPk(id);
        if(user == null){
            return next(new AppError("user not found",404));
        }

        await user.destroy();
        return res.status(200).json({message:"User deleted successfully"});
}