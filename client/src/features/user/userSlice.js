import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FetchApi from "../../utils/FetchApi";
import { toast } from "react-toastify";
import { setLocalStorage, getLocalStorage, removeLocalStorage } from "../../utils/utilsFunc";


const initialState = {
    isLoading: false,
    user: getLocalStorage().user ? JSON.parse(getLocalStorage().user) : null,
    token: getLocalStorage().token ? JSON.parse(getLocalStorage().token) : null
};


export const registerUser = createAsyncThunk("user/registerUser", async (user, thunkAPI) => {
    try {
        const response = await FetchApi.post("/auth/register", user);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
});

export const loginUser = createAsyncThunk("user/loginUser", async (user, thunkAPI) => {

    try {
        const response = await FetchApi.post("/auth/login", user);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
});


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.user = null;
            state.token = null;
            removeLocalStorage();
            toast.success("logout successfully");
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                const { user, token, message } = payload;
                state.isLoading = false;
                state.token = token;
                state.user = user;
                setLocalStorage(user, token);
                toast.success(message);
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                const { user, token, message } = payload;
                state.isLoading = false;
                state.user = user;
                state.token = token;
                setLocalStorage(user, token);
                toast.success(message);
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            });
    }
});


//destructuring the actions
export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;