import Course from "../models/Course.js";
import AsyncHandler from "../middlewares/AsyncHandler.js";
import CustomError from "../utils/CustomError.js";
import {StatusCodes} from "http-status-codes";

export const getAllCourses = AsyncHandler(async (req, res,next) => {

    const {userId}= req.user;

    const courses = await Course.find({createdBy:userId});

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

        const course= await Course.find({_id:req.params.id, createdBy:req.user.userId});

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
    let { name, number_of_lessons, lesson_completed, hours_needed, hours_spended } = req.body;
    lesson_completed= lesson_completed||0;
    hours_spended= hours_spended||0;
    let createdBy= req.user.userId;

    if (!name || !number_of_lessons || lesson_completed<0 || !hours_needed || hours_spended<0) {
        return next(new CustomError("Please provide all the fields", StatusCodes.BAD_REQUEST))
    }

    const course = await Course.create({ name, number_of_lessons, lesson_completed, hours_needed, hours_spended, createdBy });

    if(!course) {
        return next(new CustomError("course cant be created",StatusCodes.BAD_REQUEST));
    }

    res.status(StatusCodes.OK).json({
        success: true,
        data: course,
        message: "new course created",
    });
});


export const updateCourse = AsyncHandler(async (req, res, next) => {

    const filter= {createdBy:req.user.userId,_id:req.params.id}

    const course= await Course.findOneAndUpdate(filter,req.body, {
        new:true,
        runValidators:true
    })

    if(!course) {
        return next(new CustomError("course cant be updated",StatusCodes.BAD_REQUEST))
    }

    res.status(StatusCodes.OK).json({
        success:true,
        data:course,
        message: `course with ${req.params.id} is updated`
    });
});


export const deleteCourse =AsyncHandler(async (req, res, next) => {
    const filter= {createdBy:req.user.userId,_id:req.params.id}

    const course= await Course.findOneAndDelete(filter);

    if(!course) {
        return next(new CustomError("course cant be deleted",StatusCodes.BAD_REQUEST))

    }
    res.status(StatusCodes.OK).json({
        success:true,
        message: `course with ${req.params.id} is deleted`
    });
});