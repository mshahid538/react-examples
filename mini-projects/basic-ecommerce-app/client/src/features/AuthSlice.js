import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/AuthService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
};

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    return thunkAPI.rejectWithValue("Error while login");
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
