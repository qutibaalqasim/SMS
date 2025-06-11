import postModel from "../../../DB/models/post.model.js";
import { AppError } from "../../utils/AppError.js";
import cloudinary from "../../utils/cloudinary.js";



export const createPost = async (req,res,next)=>{
    
    if(req.file){
        const {secure_url} = await cloudinary.uploader.upload(req.file.path);
        req.body.postPic = secure_url;
    }
    const post = await postModel.create({
        ...req.body,
        userId: req.id
    });

    if(!post){
        return next(new AppError("failed to create post", 500));
    }
    return res.status(201).json({message:"success", post});
}