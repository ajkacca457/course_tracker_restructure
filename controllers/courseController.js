import Course from "../models/Course.js";
import CustomError from "../utils/CustomError.js";

export const getAllCourses = async (req, res) => {

    const courses = await Course.find();

    if (!courses) {
        res.status(400).json({
            success: false,
            message: "No courses found"
        });
    }

    res.status(200).json({
        success: true,
        data: courses,
        message: `${courses.length} courses found`,
    });
};


export const getSingleCourse = async (req, res, next) => {

    try {
        const course= await Course.findById(req.params.id);

        if(!course) {
            return next(new CustomError(`course is not available with id: ${req.params.id}`))
        }
    
        res.status(200).json({
            success:true,
            data:course
        });
        
    } catch (error) {
        next(error)
    }


};


export const createCourse = async (req, res,next) => {
    const { name, number_of_lessons, lesson_completed, hours_needed, hours_spended } = req.body;

    if (!name || !number_of_lessons || !lesson_completed || !hours_needed || !hours_spended) {
        return res.status(400).json({ success: false, error: "Please provide all the fields" });
    }

    const course = await Course.create({ name, number_of_lessons, lesson_completed, hours_needed, hours_spended });

    res.status(200).json({
        success: true,
        data: course,
        message: "new course created",
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