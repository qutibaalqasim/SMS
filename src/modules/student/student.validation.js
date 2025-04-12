import joi from 'joi';


export const getUniversityStudentsSchema = joi.object({
    universityName: joi.string().min(6).required(),
});

export const getStudentSchema = joi.object({
    id: joi.number().min(1).required(),
});

export const deleteStudentSchema = joi.object({
    universityId: joi.string().min(4).required(),
});