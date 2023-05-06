import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FetchApi from "../../utils/FetchApi";
import { authHeader } from "../../utils/utilsFunc";
import { toast } from "react-toastify";


const courses= localStorage.getItem("courses");
const course= localStorage.getItem("course");

const initialState= {
    courses:courses?JSON.parse(courses):[],
    isLoading:false,
    singlecourse:course?JSON.parse(course):null,
    modaldisplay:false
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


export const createCourse= createAsyncThunk("course/createCourse",async(data,thunkAPI)=>{
    const {url,course}= data;
    try {
        const response= await FetchApi.post(url,course,authHeader(thunkAPI));
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.message);
    }
})


export const deleteCourse= createAsyncThunk("course/deleteCourse",async(id,thunkAPI)=>{
    try {
        const response= await FetchApi.delete(`/courses/${id}`, authHeader(thunkAPI));
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.message);
    }
})


const courseSlice= createSlice({
    name:"course",
    initialState,
    reducers:{
        displayModal:(state)=>{
            state.modaldisplay=true;
        },
        closeModal:(state)=>{
            state.modaldisplay=false;
        }
    },

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
        .addCase(createCourse.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(createCourse.fulfilled,(state)=>{
            state.isLoading=false;
            toast.success("course added successfully");
        })
        .addCase(createCourse.rejected,(state,{payload})=>{
            state.isLoading=false;
            toast.error(payload);
        })
        .addCase(deleteCourse.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(deleteCourse.fulfilled,(state)=>{
            state.isLoading=false;
            toast.success("course deleted successfully")
        })
        .addCase(deleteCourse.rejected,(state,{payload})=>{
            state.isLoading=false;
            toast.error(payload);
        })
    }

})

export const {displayModal,closeModal}= courseSlice.actions;

export default courseSlice.reducer;


