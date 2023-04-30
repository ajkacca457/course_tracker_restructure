import {configureStore} from "@reduxjs/toolkit";
import courseSlice from "./courses/courseSlice";
import userSlice from "./user/userSlice";

export const store= configureStore({
    reducer:{
        courses:courseSlice,
        user:userSlice
    }
})