import postModel from "../../../DB/models/post.model.js";
import postImageModel from "../../../DB/models/postImage.model.js";
import { AppError } from "../../utils/AppError.js";
import cloudinary from "../../utils/cloudinary.js";



export const createPost = async (req,res,next)=>{
    
    const post = await postModel.create({
        ...req.body,
        userId: req.id
    });

    if(!post){
        return next(new AppError("failed to create post", 500));
    }

    if(req.files && req.files.length > 0){
        const images = req.files.map(file => cloudinary.uploader.upload(file.path));
        const uploadedImages = await Promise.all(images);

        const postImages = uploadedImages.map(image => ({
            imageUrl: image.secure_url,
            postId: post.id
        }));

        await postImageModel.bulkCreate(postImages);
    }

    return res.status(201).json({message:"success", post});
}


export const getPosts = async (req, res, next) => {
    const posts = await postModel.findAll({
        include: [{
            model: postImageModel,
            as: 'images'
        }],
    });

    if (!posts || posts.length == 0) {
        return next(new AppError("No posts found", 404));
    }

    return res.status(200).json({message:"success", posts});
}

export const getUserPosts = async (req, res, next) => {
    const posts = await postModel.findAll({
        where: { userId: req.id },
        include: [{
            model: postImageModel,
            as: 'images'
        }],
    });

    if (!posts || posts.length == 0) {
        return next(new AppError("No posts found for this user", 404));
    }

    return res.status(200).json({message:"success", posts});
}

export const getPostDetails = async (req, res, next) => {
    const { postId } = req.params;
    const post = await postModel.findOne({
        where: { id: postId },
        include: [{
            model: postImageModel,
            as: 'images'
        }],
    });

    if (!post) {
        return next(new AppError("Post not found", 404));
    }

    return res.status(200).json({message:"success", post});
}
