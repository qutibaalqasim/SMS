import jwt from 'jsonwebtoken';

const authSt = ()=>{
    return (req,res,next)=>{
        const {token} = req.headers;
        const decoded = jwt.verify(token, 'qqq');
        req.id = decoded.id;
        next();
    }
}


export default authSt;