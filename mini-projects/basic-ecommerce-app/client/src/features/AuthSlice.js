import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/AuthService";

const initialState = {
  user: null,
};

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const result = await authService.login(user);
    return result;
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

export default authSlice.reducer;
