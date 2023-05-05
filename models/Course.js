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
        min: [0, "Number of lessons cannot be less than 0"],
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
        min: [0, "Number of lessons cannot be less than 0"],
        max: [100, "Number of lessons cannot exceed 100"],
    },

    createdBy: {
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:[true,"course owner id required"]
    },

    createdAt: {
        type:Date,
        default:Date.now
    }
});


export default mongoose.model("Course", CourseSchema);