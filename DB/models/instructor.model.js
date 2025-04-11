import { DataTypes} from "sequelize";
import { sequelize } from "../connection.js";
import userModel from "./user.model.js";
import universityModel from "./university.model.js";


const instructorModel = sequelize.define('Instructor',{
    instructorNumber:{
        type:DataTypes.INTEGER,
        unique:true,
        allowNull:false
      },
      department:{
        type:DataTypes.STRING,
        allowNull:true
      }
});

universityModel.hasMany(instructorModel);
instructorModel.belongsTo(universityModel);
userModel.hasMany(instructorModel);
instructorModel.belongsTo(userModel);

export default instructorModel;