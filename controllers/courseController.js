export const getAllCourses = async (req, res) => {
    res.status(200).json({
        message: "This route will show all courses"
    });
};


export const getSingleCourse = async (req, res) => {
    res.status(200).json({
        message: "This route will show a single course"
    });
};


export const createCourse = async (req, res) => {
    res.status(200).json({
        message: "This route will create a course"
    });
};


export const updateCourse = async (req, res) => {
    res.status(200).json({
        message: "This route will update a course"
    });
};


export const deleteCourse = async (req, res) => {
    res.status(200).json({
        message: "This route will delete a course"
    });
};