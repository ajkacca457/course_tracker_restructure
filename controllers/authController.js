export const loginUser = async (req, res, next) => {
    res.status(200).json({
        message: "Login User"
    });
};


export const registerUser = async (req, res, next) => {
    res.status(200).json({
        message: "Register User"
    });
};


export const updateProfile = async (req, res, next) => {
    res.status(200).json({
        message: "Update Profile"
    });
};