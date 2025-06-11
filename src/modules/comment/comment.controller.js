import commentModel from "../../../DB/models/comment.model.js";
import { AppError } from "../../utils/AppError.js";


export const createComment = async (req, res, next) => {
    const { postId, content } = req.body;

    if (!postId || !content) {
        return next(new AppError("Post ID and content are required", 400));
    }

    const comment = await commentModel.create({
        userId: req.id,
        postId,
        content
    });

    if (!comment) {
        return next(new AppError("Failed to create comment", 400));
    }

    return res.status(201).json({ message: "Comment created successfully", comment });
}