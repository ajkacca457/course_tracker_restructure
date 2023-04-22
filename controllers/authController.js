import AsyncHandler from "../middlewares/AsyncHandler.js";


export const loginUser = AsyncHandler(async (req, res, next) => {
    res.status(200).json({
        success:true,
        message: "Login User"
    });
});


export const registerUser = AsyncHandler(async (req, res, next) => {
    console.log(req.body);

    res.status(200).json({
        success:true,
        message: "Register User"
    });
});


export const updateProfile =AsyncHandler(async (req, res, next) => {
    res.status(200).json({
        success:true,
        message: "Update Profile"
    });
});