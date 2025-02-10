import jwt from 'jsonwebtoken';
import { AppError } from '../utils/AppError.js';


const auth = ()=>{
    return (req,res,next)=>{
        const {token} = req.headers;
        const decoded = jwt.verify(token, 'qqq');
        if(decoded.role == 'user'){
            return next(new AppError("the admin only can do this request", 400));
        }

        req.id = decoded.id;
        next();
    }
}


export default auth;