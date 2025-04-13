import joi from "joi";


export const createUAdminSchema = joi.object({
    universityId: joi.string().min(4).required(),
});

export const getUAdminSchema = joi.object({
    id: joi.number().min(1).required(),
});

export const deleteUAdminSchema = joi.object({
    id: joi.number().min(1).required(),
});

export const updateUAdminSchema = joi.object({
    id: joi.number().min(1).required(),
    userName: joi.string().min(3).max(20),
    email: joi.string().email(),
    universityId: joi.string().min(4),
    universityName: joi.string().min(6),
    department: joi.string().min(5),
});