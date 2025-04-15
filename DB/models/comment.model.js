import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import userModel from "./user.model.js";
import postModel from "./post.model.js";



const commentModel = sequelize.define("Comment",{
    content:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    commentPic:{
        type:DataTypes.STRING,
        allowNull:true
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

userModel.hasMany(commentModel,{
    foreignKey:"userId"
});
commentModel.belongsTo(userModel,{
    foreignKey:"userId"
});

postModel.hasMany(commentModel,{
    foreignKey:"postId"
});
commentModel.belongsTo(postModel,{
    foreignKey:"postId"
});

export default commentModel;