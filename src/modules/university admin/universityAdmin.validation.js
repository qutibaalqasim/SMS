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