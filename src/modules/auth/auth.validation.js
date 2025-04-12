import joi from "joi";


export const registerSchema = joi.object({
    userName: joi.string().min(3).max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    universityId: joi.string().min(4).required(),
});

export const confirmSchema = joi.object({
    token: joi.string().required(),
});



export const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
});