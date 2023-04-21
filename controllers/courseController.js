import Course from "../models/Course.js";

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