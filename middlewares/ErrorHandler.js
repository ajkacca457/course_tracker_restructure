import { StatusCodes } from "http-status-codes";
import CustomError from "../utils/CustomError.js";

const ErrorHandler=(err,req,res,next)=>{
    let error;
    error= {...err};
    error.name= err.name;
    error.statusCode= err.statusCode;
    error.message=err.message;

    if(error.name==="ValidationError") {
        let message= Object.values(error.errors).map(item=>item.properties.message);
        error= new CustomError(message,StatusCodes.BAD_REQUEST)
    }

    if(error.name==="CastError") {
        let message= `Transaction with ID ${error.value} doesnt exists`;
        error= new CustomError(message,StatusCodes.NOT_FOUND);
    }
    
    res.status(error.statusCode||StatusCodes.INTERNAL_SERVER_ERROR).json({
        success:false,
        message:error.message
    })

}


export default ErrorHandler;