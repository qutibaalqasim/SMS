import { connectDB } from "../DB/connection.js";


const initApp = (app)=>{
    connectDB();
}


export default initApp;