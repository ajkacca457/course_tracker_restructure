import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState= {
    isLoading:false,
    user:null,
    token:null
}


export const registerUser= createAsyncThunk("user/registerUser", async(user,thunkAPI)=>{
    console.log(thunkAPI)
})


const userSlice= createSlice({
    name:"user",
    initialState
})


export default userSlice.reducer;