import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";


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
    },
    createdAt: {
        type:Date,
        default:Date.now
    }

});

UserSchema.pre("save", async function (){
    const salt= await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
})


export default mongoose.model("User", UserSchema);