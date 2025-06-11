import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import postModel from "./post.model.js";
import userModel from "./user.model.js";


const postImageModel = sequelize.define("PostImage",{
    imageUrl:{
            type:DataTypes.STRING,
            allowNull:false
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

postModel.hasMany(postImageModel,{
  foreignKey:"postId", as: "images"
});
postImageModel.belongsTo(postModel,{
  foreignKey:"postId"
});

userModel.hasMany(postModel,{
    foreignKey:"userId"
});
postModel.belongsTo(userModel,{
    foreignKey:"userId"
});

export default postImageModel;