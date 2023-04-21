import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        requried: [true, "Please add user name"],
    },
    email: {
        type: String,
        match: []
    },
    password: {
        type: String,
        requried: [true, "Please add password"],
    }

});

export default mongoose.model("User", UserSchema);