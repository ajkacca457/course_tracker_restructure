import Course from "../models/Course.js";
import AsyncHandler from "../middlewares/AsyncHandler.js";
import CustomError from "../utils/CustomError.js";

export const getAllCourses = AsyncHandler(async (req, res,next) => {

    const courses = await Course.find();

    if (!courses) {
        return (next(new CustomError("courses are not available",401)))
    }

    res.status(200).json({
        success: true,
        data: courses,
        message: `${courses.length} courses found`,
    });
});


export const getSingleCourse = AysncHanlder(async (req, res, next) => {

        const course= await Course.findById(req.params.id);

        if(!course) {
            return next(new CustomError(`course is not available with id: ${req.params.id}`))
        }
    
        res.status(200).json({
            success:true,
            data:course
        }); 
});


export const createCourse = AsyncHandler(async (req, res,next) => {
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
});


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