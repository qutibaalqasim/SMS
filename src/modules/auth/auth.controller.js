import bcrypt from 'bcryptjs';
import userModel from '../../../DB/models/user.model.js';
import { sendEmail } from '../../utils/sendEmail.js';
import { AppError } from '../../utils/AppError.js';
import jwt from 'jsonwebtoken';

export const register = async (req,res)=>{
    const {userName , email , password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, process.env.SALT_ROUND);
    const user = await userModel.create({userName, email, password: hashedPassword});
    sendEmail(email, "Welcome", `<h2> hello ya ${userName} </h2>`);
    return res.status(201).json({message:"registered successfully"});
}



export const login = async (req,res,next)=>{
    const {email,password} = req.body;
    const user = await userModel.findOne({
        where:{
            email
        },
    });
    if(user == null){
        return next(new AppError("user not found", 404));
    }
    const check = bcrypt.compareSync(password, user.password);
    if(check == false){
        return next(new AppError("incorrect password", 400));
    }
    const token = jwt.sign(
        {id:user.id, name:user.userName, role:user.role},process.env.LOGIN_SIGNETURE
    );
    return res.status(200).json({message:"valid user", token});
}