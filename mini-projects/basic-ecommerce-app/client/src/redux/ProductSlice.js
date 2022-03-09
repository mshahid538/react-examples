import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const ProductsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get("http://localhost:5000/books");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [ProductsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [ProductsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [ProductsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default ProductsSlice.reducer;
