import joi from 'joi';


export const getUniversityStudentsSchema = joi.object({
    universityName: joi.string().min(6).required(),
});