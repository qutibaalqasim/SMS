import { DataTypes} from "sequelize";
import { sequelize } from "../connection.js";
import userModel from "./user.model.js";
import universityModel from "./university.model.js";


const studentModel = sequelize.define('Student',{
  studentNumber:{
    type:DataTypes.INTEGER,
    unique:true,
    allowNull:false
  },
  department:{
    type:DataTypes.STRING,
    allowNull:true
  }
});

universityModel.hasMany(studentModel);
studentModel.belongsTo(universityModel);
userModel.hasMany(studentModel);
studentModel.belongsTo(userModel);

export default studentModel;