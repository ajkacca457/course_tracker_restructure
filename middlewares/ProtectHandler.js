import AsyncHandler from "./AsyncHandler.js";
import CustomError from "../utils/CustomError.js";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";


const ProtectHandler=AsyncHandler( async (req,res,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token= req.headers.authorization.split(" ")[1];
    }

    if(!token) {
        return next(new CustomError("not authorized to access data",StatusCodes.UNAUTHORIZED));
    }

    try {
        const decoded= jwt.decode(token);
        req.user={userId:decoded.userId};
        next();
    } catch (error) {
        return next(new CustomError(error.message,StatusCodes.UNAUTHORIZED));
    }

})


export default ProtectHandler;