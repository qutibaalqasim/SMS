import { DataTypes} from "sequelize";
import { sequelize } from "../connection.js";
import userModel from "./user.model.js";


const universityModel = sequelize.define('University',{
   name:{
    type:DataTypes.STRING,
    unique:true,
    allowNull:false
   },
   email:{
    type:DataTypes.STRING,
    unique:true,
    allowNull:false
   },
   location:{
    type:DataTypes.STRING,
    allowNull:true
   },
   contactNumber:{
    type:DataTypes.INTEGER,
    unique:true,
    allowNull:true
   }
});

universityModel.hasMany(userModel);
userModel.belongsTo(universityModel);

export default universityModel;