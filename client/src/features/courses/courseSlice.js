import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FetchApi from "../../utils/FetchApi";
import { authHeader } from "../../utils/utilsFunc";
import { toast } from "react-toastify";


const courses= localStorage.getItem("courses");
const course= localStorage.getItem("course");

const initialState= {
    courses:courses?JSON.parse(courses):[],
    isLoading:false,
    singlecourse:course?JSON.parse(course):null
}

export const getAllCourses= createAsyncThunk("course/getAllCourses",async(url,thunkAPI)=>{
        try {
            const response= await FetchApi.get(url, authHeader(thunkAPI));
            return response.data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.response.data.message);
        }
})

export const getSingleCourse= createAsyncThunk("course/getSingleCourse",async(url,thunkAPI)=>{
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
        .addCase(getSingleCourse.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getSingleCourse.fulfilled,(state,{payload})=>{
            state.isLoading=false;
            state.singlecourse=payload.data[0];
            localStorage.setItem("course",JSON.stringify(payload.data));
        })
        .addCase(getSingleCourse.rejected,(state,{payload})=>{
            state.isLoading=false;
            toast.error(payload);
        })
    }

})


export default courseSlice.reducer;


