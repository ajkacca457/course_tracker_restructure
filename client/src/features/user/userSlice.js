import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FetchApi from "../../utils/FetchApi";

const initialState= {
    isLoading:false,
    user:null,
    token:null
}


export const registerUser= createAsyncThunk("user/registerUser", async(user,thunkAPI)=>{
    console.log(thunkAPI.getState());
    console.log(user);
})


const userSlice= createSlice({
    name:"user",
    initialState,
})


export default userSlice.reducer;