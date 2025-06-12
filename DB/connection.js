import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('freedb_smsProject', 'freedb_qutiba9', 'W7Z$k$%j*vdZx4f', {
    host: 'sql.freedb.tech',
    port: 3306,
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