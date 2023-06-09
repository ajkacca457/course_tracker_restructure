import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


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
    // if password modified then password hash will run for new password or else it will prevent from running the password hash
    if(!this.isModified("password")) return;
    const salt= await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
})

UserSchema.methods.getToken= function() {
    return jwt.sign({userId:this._id},process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRE})
}

UserSchema.methods.checkPassword= async function(userpassword) {
    const isMatch= await bcrypt.compare(userpassword,this.password);
    return isMatch;

}

export default mongoose.model("User", UserSchema);