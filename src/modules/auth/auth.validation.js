import joi from "joi";


export const registerSchema = joi.object({
    userName: joi.string().min(3).max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    universityId: joi.number().min(1).required(),
    universityNum: joi.string().min(4).required(),
});

export const sendCodeSchema = joi.object({
    email: joi.string().email().required(),
});

export const resetPasswordSchema = joi.object({
    code: joi.string().max(4).required(),
    email: joi.string().email().required(),
    newPassword: joi.string().min(6).required(),
});

export const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
});