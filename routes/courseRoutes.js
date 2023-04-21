import express from "express";
import { getAllCourses, createCourse } from "../controllers/courseController.js";
import { getSingleCourse, updateCourse, deleteCourse } from "../controllers/courseController.js";


const router = express.Router();

router.route("/").get(getAllCourses).post(createCourse);
router.route("/:id").get(getSingleCourse).put(updateCourse).delete(deleteCourse);


export default router;