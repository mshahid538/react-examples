import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const ItemsFetch = createAsyncThunk("items/itemsFetch", async () => {
  try {
    const response = await axios.get("http://localhost:5000/items");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const ItemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: {
    [ItemsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [ItemsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [ItemsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default ItemsSlice.reducer;
