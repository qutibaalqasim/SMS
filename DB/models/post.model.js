import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import userModel from "./user.model.js";


const postModel = sequelize.define("Post",{
      title:{
            type:DataTypes.STRING,
            allowNull:true
      },
      content:{
        type:DataTypes.TEXT,
        allowNull:false,
      },
      postPic:{
        type:DataTypes.STRING,
        allowNull:true,
      },
      likesCount:{
        type:DataTypes.INTEGER,
        defaultValue:0
      },
      userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:"Users",
          key:"id"
        }
      }
});

userModel.hasMany(postModel,{
  foreignKey:"userId"
});
postModel.belongsTo(userModel,{
  foreignKey:"userId"
});

export default postModel;