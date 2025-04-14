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
   description:{
      type:DataTypes.TEXT,
      allowNull:true
   },
   website:{
      type:DataTypes.STRING,
      allowNull:true
   },
   profilePic:{
      type:DataTypes.STRING,
      allowNull:true
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


universityModel.hasMany(userModel,{
   foreignKey:"universityId"
});
userModel.belongsTo(universityModel,
   {foreignKey:"universityId"}
);

export default universityModel;