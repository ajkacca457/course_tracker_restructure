import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./env/db.js";
import CourseRoutes from "./routes/courseRoutes.js";

dotenv.config({
    path: "./env/config.env",
});

const app = express();

app.use("/api/v1/courses", CourseRoutes);

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
