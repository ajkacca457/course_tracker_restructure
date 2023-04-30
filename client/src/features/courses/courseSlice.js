import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    courses:[],
    isLoading:false,
}

const courseSlice= createSlice({
    name:"course",
    initialState

})


export default courseSlice.reducer;


