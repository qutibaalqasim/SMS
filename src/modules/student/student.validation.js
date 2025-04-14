import joi from 'joi';


export const getUniversityStudentsSchema = joi.object({
    id: joi.number().min(1).required(),
});

export const getStudentSchema = joi.object({
    id: joi.number().min(1).required(),
});

export const deleteStudentSchema = joi.object({
    id: joi.number().min(1).required(),
});

export const updateStudentSchema = joi.object({
    id: joi.number().min(1).required(),
    userName: joi.string().min(3).max(20),
    email: joi.string().email(),
    universityId: joi.string().min(1),
    universityNum: joi.string().min(4),
    department: joi.string().min(5),
});

export const updateImageSchema = joi.object({
    id: joi.number().min(1).required(),
});