import joi from "joi";


export const getUniversityInstructorsSchema = joi.object({
    universityName: joi.string().min(6).required(),
});

export const getInstructorSchema = joi.object({
    id: joi.number().min(1).required(),
});

export const deleteInstructorSchema = joi.object({
    universityId: joi.string().min(4).required(),
});

export const updateInstructorSchema = joi.object({
    id: joi.number().min(1).required(),
    userName: joi.string().min(3).max(20),
    email: joi.string().email(),
    universityId: joi.string().min(4),
    universityName: joi.string().min(6),
    department: joi.string().min(5),
});