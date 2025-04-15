import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import userModel from "./user.model.js";
import postModel from "./post.model.js";


const reactionModel = sequelize.define("Reaction",{
    emoji:{
        type:DataTypes.STRING,
        allowNull:false
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"Users",
            key:"id"
        }
    },
    postId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"Posts",
            key:"id"
        }
    }
});

userModel.hasMany(reactionModel,{
    foreignKey:"userId"
});
reactionModel.belongsTo(userModel,{
    foreignKey:"userId"
});
postModel.hasMany(reactionModel,{
    foreignKey:"postId"
});
reactionModel.belongsTo(postModel,{
    foreignKey:"postId"
});

export default reactionModel;