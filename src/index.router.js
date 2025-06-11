import { connectDB } from "../DB/connection.js";
import authRouter from "./modules/auth/auth.router.js";
import studentRouter from "./modules/student/student.router.js";
import intructorRouter from "./modules/instructor/instructor.router.js";
import UAdminRouter from "./modules/university admin/universityAdmin.router.js";
import universityRouter from "./modules/university/university.router.js";
import postRouter from "./modules/post/post.router.js";
import commentRouter from "./modules/comment/comment.router.js";
import cors from 'cors';

const initApp = (app)=>{
    connectDB();
    app.use(cors());
    
    app.get('/', (req, res)=>{
        return res.status(200).json({message:"Welcome to the Student Management System"});
    });

    // localhost:3000/auth/
    app.use('/auth', authRouter);
    // localhost:3000/students/
    app.use('/students' ,studentRouter);
    // localhost:3000/instructors/
    app.use('/instructors',intructorRouter);
    // localhost:3000/UAdmins/
    app.use('/UAdmins',UAdminRouter);
    // localhost:3000/universities/
    app.use('/universites', universityRouter)
    // localhost:3000/posts/
    app.use('/posts', postRouter);
    // localhost:3000/comments/
    app.use('/comments', commentRouter);
    // 404 handler
    app.get('*', (req,res)=>{
        return res.status(404).json({message:"page not found"})
    });
    //global error handler
    app.use( (err,req,res,next)=>{
        return res.status(err.statusCode || 500).json({message:err.message});
    });
}


export default initApp;