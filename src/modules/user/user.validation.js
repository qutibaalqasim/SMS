import joi from "joi";


export const deleteSchema = joi.object({
    id: joi.number().required(),
});