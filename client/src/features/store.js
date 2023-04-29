import {configureStore} from "@reduxjs/toolkit";
import courseSlice from "./slices/courseSlice";
import userSlice from "./slices/userSlice";

export const store= configureStore({
    reducer:{
        courses:courseSlice,
        user:userSlice
    }
})