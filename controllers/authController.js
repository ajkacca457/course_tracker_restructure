import AsyncHandler from "../middlewares/AsyncHandler.js";
import User from "../models/User.js";
import CustomError from "../utils/CustomError.js";
import { StatusCodes } from "http-status-codes/build/cjs/status-codes.js";


export const loginUser = AsyncHandler(async (req, res, next) => {

    const {email,password}= req.body;

    if(!email||!password) {
        return next(new CustomError("please provide all the values",StatusCodes.BAD_REQUEST));
    }

    const user= await User.findOne({email}).select("+password");

    if(!user) {
        return next(new CustomError("user doesnt exists",StatusCodes.NOT_FOUND));
    }


    res.status(StatusCodes.OK).json({
        success:true,
        message: "Login User"
    });
});


export const registerUser = AsyncHandler(async (req, res, next) => {
    const {username,email,password}=req.body;

    const user= await User.create({username,email,password});

    if(!user) {
        return next(new CustomError("user cant be created", StatusCodes.BAD_REQUEST))
    }
    
    const token= user.getToken();

    res.status(StatusCodes.OK).json({
        success:true,
        user:{id:user._id,username:user.username,email:user.email,createdAt:user.createdAt},
        token,
        message: "New user registered"
    });
});


export const updateProfile =AsyncHandler(async (req, res, next) => {
    res.status(StatusCodes.OK).json({
        success:true,
        message: "Update Profile"
    });
});