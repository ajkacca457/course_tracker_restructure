import express from "express";
import { loginUser, registerUser, updateProfile } from "../controllers/authController.js";
import ProtectHandler from "../middlewares/ProtectHandler.js";


const router = express.Router();
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/update-profile").patch(ProtectHandler,updateProfile);

export default router;