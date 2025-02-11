import { connectDB } from "../DB/connection.js";
import authRouter from "./modules/auth/auth.router.js";
import userRouter from "./modules/user/user.router.js";
import studentRouter from "./modules/student/student.router.js";
const initApp = (app)=>{
    connectDB();

    // localhost:3000/auth/
    app.use('/auth', authRouter);
    // localhost:3000/user/
    app.use('/user', userRouter);
    // localhost:3000/student/
    app.use('/student', studentRouter);

    app.use( (err,req,res,next)=>{
        return res.status(err.statusCode).json({message:err.message});
    });
}


export default initApp;