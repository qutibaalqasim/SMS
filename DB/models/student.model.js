import { DataTypes} from "sequelize";
import { sequelize } from "../connection.js";
import userModel from "./user.model.js";


const studentModel = sequelize.define('Student',{
    studentName:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    university:{
        type: DataTypes.STRING,
        allowNull:false
    },
    grade:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    studentPic:{
        type: DataTypes.STRING,
        allowNull:true
    }

});

userModel.hasMany(studentModel);
studentModel.belongsTo(userModel);

export default studentModel;