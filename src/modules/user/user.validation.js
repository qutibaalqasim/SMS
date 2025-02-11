import joi from "joi";


export const idValidate = joi.object({
    id: joi.number().min(1).required()
});


