import Course from "../models/Course.js";
import AsyncHandler from "../middlewares/AsyncHandler.js";
import CustomError from "../utils/CustomError.js";
import {StatusCodes} from "http-status-codes";

export const getAllCourses = AsyncHandler(async (req, res,next) => {

    const {userId}= req.user;
    console.log(userId);

    const courses = await Course.find();

    if (!courses) {
        return (next(new CustomError("courses are not available",StatusCodes.BAD_REQUEST)))
    }

    res.status(StatusCodes.OK).json({
        success: true,
        data: courses,
        message: `${courses.length} courses found`,
    });
});


export const getSingleCourse = AsyncHandler(async (req, res, next) => {

        const course= await Course.findById(req.params.id);

        if(!course) {
            return next(new CustomError(`course is not available with id: ${req.params.id}`,StatusCodes.BAD_REQUEST))
        }
    
        res.status(StatusCodes.OK).json({
            success:true,
            data:course,
            message: `course found with ${req.params.id}`,
        }); 
});


export const createCourse = AsyncHandler(async (req, res,next) => {
    const { name, number_of_lessons, lesson_completed, hours_needed, hours_spended,createdBy } = req.body;

    if (!name || !number_of_lessons || !lesson_completed || !hours_needed || !hours_spended) {
        return next(new CustomError("Please provide all the fields", StatusCodes.BAD_REQUEST))
    }

    const course = await Course.create({ name, number_of_lessons, lesson_completed, hours_needed, hours_spended, createdBy });

    res.status(StatusCodes.OK).json({
        success: true,
        data: course,
        message: "new course created",
    });
});


export const updateCourse = AsyncHandler(async (req, res, next) => {
    res.status(StatusCodes.OK).json({
        success:true,
        message: "This route will update a course"
    });
});


export const deleteCourse =AsyncHandler(async (req, res, next) => {
    res.status(StatusCodes.OK).json({
        success:true,
        message: "This route will delete a course"
    });
});