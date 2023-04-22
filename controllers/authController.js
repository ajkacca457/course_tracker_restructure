export const loginUser = async (req, res, next) => {
    res.status(200).json({
        success:true,
        message: "Login User"
    });
};


export const registerUser = async (req, res, next) => {
    res.status(200).json({
        success:true,
        message: "Register User"
    });
};


export const updateProfile = async (req, res, next) => {
    res.status(200).json({
        success:true,
        message: "Update Profile"
    });
};