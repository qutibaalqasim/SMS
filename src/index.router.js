import { connectDB } from "../DB/connection.js";
import authRouter from "./modules/auth/auth.router.js";
import userRouter from "./modules/user/user.router.js";
import studentRouter from "./modules/student/student.router.js";
import cors from 'cors';
const initApp = (app)=>{
    connectDB();
    app.use(cors());
    
    app.get('/', (req, res)=>{
        return res.status(200).json({message:"Welcome to the Student Management System"});
    });

    // localhost:3000/auth/
    app.use('/auth', authRouter);
    // localhost:3000/user/
    app.use('/user', userRouter);
    // localhost:3000/student/
    app.use('/student', studentRouter);

    app.get('*', (req,res)=>{
        return res.status(404).json({message:"page not found"})
    });
    //global error handler
    app.use( (err,req,res,next)=>{
        return res.status(err.statusCode).json({message:err.message});
    });
}


export default initApp;