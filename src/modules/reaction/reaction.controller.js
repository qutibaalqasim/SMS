import postModel from "../../../DB/models/post.model.js";
import reactionModel from "../../../DB/models/reaction.model.js";
import { AppError } from "../../utils/AppError.js";


export const createReaction = async (req, res, next) => {
    const {postId} = req.params;
    const {emoji} = req.body;
    if (!postId || !emoji) {
        return next(new AppError("Post ID and emoji are required", 400));
    }

    const existing = await reactionModel.findOne({
        where: {
            postId,
            emoji,
            userId: req.id
        }
    });

    if (existing) {
        return next(new AppError("You have already reacted with this emoji", 400));
    }
    const reaction = await reactionModel.create({
        emoji,
        userId: req.id,
        postId
    });

    if(!reaction) {
        return next(new AppError("Failed to create reaction", 400));
    }

    await postModel.increment('likesCount', {
        where: { id: postId }
    });

    return res.status(201).json({ message: "Reaction created successfully", reaction });
}

export const deleteReaction = async (req, res, next) => {
    const {postId} = req.params;
    const {emoji} = req.body;

    if (!postId || !emoji) {
        return next(new AppError("Post ID and emoji are required", 400));
    }

    const reaction = await reactionModel.destroy({
        where: {
            postId,
            emoji,
            userId: req.id
        }
    });

    if (!reaction) {
        return next(new AppError("Failed to delete reaction", 400));
    }

    await postModel.decrement('likesCount', {
        where: { id: postId }
    });

    return res.status(200).json({ message: "Reaction deleted successfully" });
}