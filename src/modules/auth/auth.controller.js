import bcrypt from 'bcryptjs';
import userModel from '../../../DB/models/user.model.js';
import { sendEmail } from '../../utils/sendEmail.js';
import { AppError } from '../../utils/AppError.js';
import jwt from 'jsonwebtoken';
import { Op } from 'sequelize';
import { customAlphabet } from 'nanoid';

export const register = async (req,res,next)=>{
    const {userName , email , password, universityId, universityName} = req.body;
    const check = await userModel.findOne({
       where:{
        [Op.or]:[
            {userName},
            {email},
            {universityId}
        ]
    } 
    }); 
    if(check){
        return next(new AppError("this email or userName already exist!!", 404));
    }
    const hashedPassword = bcrypt.hashSync(password,parseInt(process.env.SALT_ROUND));
    const user = await userModel.create({userName, email, password: hashedPassword, universityId,universityName});
    sendEmail(email, "Welcome", `<h2> Welcome to the Boardly ${userName} </h2>`);
    return res.status(201).json({message:"registered successfully"});
}

export const confirmEmail = async(req,res,next)=>{
    const {token} = req.params;
    const decoded = jwt.verify(token, process.env.LOGIN_SIGNETURE);
    if(!decoded){
        return next(new AppError("incorrect email", 404));
    }
    const user = await userModel.findOne({email:decoded.email});
    await user.update({confirmEmail:true});
    return res.status(200).json({message:"success"});
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
        {id:user.id, name:user.userName, role:user.role, universityId:user.universityId, universityName:user.universityName},process.env.LOGIN_SIGNETURE
    );
    return res.status(200).json({message:"valid user", token});
}

export const sendCode = async (req,res,next)=>{
    const {email} = req.body;
    const code1 = customAlphabet('1234567890abcdefABCDEF', 4);
    const code = code1();
    const user = await userModel.findOne({email});
    if(!user){
        return next(new AppError("incorrect email", 404));
    }
    const html = `<h2>your code is ${code}</h2>`;
    await sendEmail(email,"code for reset password", html);
    user.sendCode = code;
    await user.save();
    return res.status(200).json({message:"success"});
}
export const resetPassword =async (req,res,next)=>{
    const {code, email, newPassword} = req.body;
    const user = await userModel.findOne({email});
    if(!user){
        return next(new AppError("incorrect email", 404));
    }
    if(code != user.sendCode){
        return next(new AppError("your code incorrect", 404));
    }

    const hashedPassword = bcrypt.hashSync(newPassword,parseInt(process.env.SALT_ROUND));
    user.password = hashedPassword;
    user.sendCode = null;
    await user.save();
    return res.status(200).json({message:"success"});
}