import mongoose from "mongoose";
import validator from "validator";


const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        requried: [true, "Please add user name"],
        minLength:[4,"username cant be shorter than 4 character"]
    },
    email: {
        type: String,
        unique:true,
        required:[true,"email is required"],
        validate: {
            validator:validator.isEmail,
            message:"provide a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Please add password"],
        trim:true,
        minLength:6,
        maxLength:20,
        select:false
    }

});

export default mongoose.model("User", UserSchema);