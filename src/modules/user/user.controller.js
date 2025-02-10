import userModel from "../../../DB/models/user.model.js";



export const getUsers = async (req,res)=>{
    const users = await userModel.findAll({
        attributes: ['id', 'userName', 'email'],
    });

    return res.status(200).json({message:"success" , users});

}