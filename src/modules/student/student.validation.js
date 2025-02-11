import joi from "joi";


export const studentSchema = joi.object({
    studentName: joi.string().min(3).required(),
    university: joi.string().min(6).required(),
    grade: joi.number().min(1).required(),
});


export const validateID = joi.object({
    id: joi.number().min(1).required(),
});