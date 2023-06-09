import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./env/db.js";
import CourseRoutes from "./routes/courseRoutes.js";
import AuthRoutes from "./routes/authRoutes.js";
import ErrorHandler from "./middlewares/ErrorHandler.js";
import ProtectHandler from "./middlewares/ProtectHandler.js";

dotenv.config({
    path: "./env/config.env",
});

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/courses",ProtectHandler,CourseRoutes);


app.use(ErrorHandler);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        const connect = await ConnectDB();
        app.listen(PORT, console.log(`Server is connected to ${connect.connection.host}`));
    } catch (error) {
        console.log(error);
    }
};

startServer();
