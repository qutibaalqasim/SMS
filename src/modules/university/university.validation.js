import joi from 'joi';


export const createUniversitySchema = joi.object({
    name: joi.string().min(6).required(),
    email: joi.string().email().required(),
    location: joi.string().min(5),
    contactNumber: joi.number().min(1),
    description: joi.string().min(10),
    website: joi.string().email(),
});

export const getUniversitySchema = joi.object({
    id: joi.number().min(1).required(),
});

export const deleteUniversitySchema = joi.object({
    id: joi.number().min(1).required(),
});

export const updateUniversitySchema = joi.object({
    id: joi.number().min(1).required(),
    name: joi.string().min(6).required(),
    email: joi.string().email().required(),
    location: joi.string().min(5),
    contactNumber: joi.number().min(1),
    description: joi.string().min(10),
    website: joi.string().email(),
});

