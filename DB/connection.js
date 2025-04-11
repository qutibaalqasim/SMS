import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('sms', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });



export const connectDB = ()=>{
    sequelize.sync()
    .then(()=>{
        console.log("connected successfully to database");
    })
    .catch((err)=>{
        console.log("failed to connect to database");
    });
}