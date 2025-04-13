import joi from 'joi';


export const createUniversitySchema = joi.object({
    name: joi.string().min(6).required(),
    email: joi.string().email().required(),
    location: joi.string().min(5).max(35),
    contactNumber: joi.number().min(1).max(15),
});

