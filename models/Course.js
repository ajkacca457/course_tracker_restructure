import mongoose from "mongoose";


const CourseSchema = new mongoose.Schema({

    name: {
        type: String,
        requried: [true, "Please add a course name"],
        maxLength: [25, "Course name cannot exceed 25 characters"]
    },
    number_of_lessons: {
        type: Number,
        requried: [true, "Please add number of lessons"],
        min: [1, "Number of lessons cannot be less than 1"],
        max: [100, "Number of lessons cannot exceed 100"],
    },
    lesson_completed: {
        type: Number,
        requried: [true, "Please add number of completed lessons"],
        min: [1, "Number of lessons cannot be less than 1"],
        max: [100, "Number of lessons cannot exceed 100"],
    },
    hours_needed: {
        type: Number,
        required: [true, "Please add number of hours needed"],
        min: [1, "Number of lessons cannot be less than 1"],
        max: [100, "Number of lessons cannot exceed 100"],
    },
    hours_spended: {
        type: Number,
        required: [true, "Please add number of hours spended"],
        min: [1, "Number of lessons cannot be less than 1"],
        max: [100, "Number of lessons cannot exceed 100"],
    },
});


export default mongoose.model("Course", CourseSchema);