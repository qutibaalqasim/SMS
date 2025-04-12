import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";


const userModel = sequelize.define('User', {
    userName:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    confirmEmail:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    profilePic:{
        type:DataTypes.STRING,
        allowNull:true
    },
    role:{
        type:DataTypes.ENUM('student','instructor','admin','university_admin'),
        defaultValue:'student',
        allowNull:false
    },
    universityId:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
      },
      department:{
        type:DataTypes.STRING,
        allowNull:true
      }
});

export default userModel;