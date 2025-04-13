import joi from "joi";


export const createUAdminSchema = joi.object({
    universityId: joi.string().min(4).required(),
});