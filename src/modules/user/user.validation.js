import joi from "joi";


export const deleteSchema = joi.object({
    id: joi.number().min(1).required()
});


export const updateSchema = joi.object({
    id: joi.number().min(1).required()
});