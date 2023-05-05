import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FetchApi from "../../utils/FetchApi";
import { authHeader } from "../../utils/utilsFunc";
import { toast } from "react-toastify";


const courses= localStorage.getItem("courses");

const initialState= {
    courses:courses?JSON.parse(courses):[],
    isLoading:false,
}

export const getAllCourses= createAsyncThunk("course/getAllCourse",async(url,thunkAPI)=>{
    console.log(thunkAPI.getState().user.token);
        try {
            const response= await FetchApi.get(url, authHeader(thunkAPI));
            return response.data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.response.data.message);
        }
})


const courseSlice= createSlice({
    name:"course",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getAllCourses.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getAllCourses.fulfilled,(state,{payload})=>{
            state.isLoading=false;
            state.courses=payload.data;
            localStorage.setItem("courses",JSON.stringify(payload.data));
        })
        .addCase(getAllCourses.rejected,(state,{payload})=>{
            state.isLoading=false;
            toast.error(payload);
        })
    }

})


export default courseSlice.reducer;


