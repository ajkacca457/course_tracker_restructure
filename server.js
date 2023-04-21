import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./env/db.js";

dotenv.config({
    path: "./env/config.env",
});

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello World",
    });
});


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
