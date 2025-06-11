import commentModel from "../../../DB/models/comment.model.js";
import userModel from "../../../DB/models/user.model.js";
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

export const getPostComments = async (req, res, next) => {
    const { postId } = req.params;

    if (!postId) {
        return next(new AppError("Post ID is required", 400));
    }

    const comments = await commentModel.findAll({
        where: { id:postId },
        include: [{ model: userModel, attributes: ['userName', 'profilePic'] }]
    });

    if (!comments || comments.length === 0) {
        return next(new AppError("No comments found for this post", 404));
    }

    return res.status(200).json({ message: "Comments retrieved successfully", comments });
}