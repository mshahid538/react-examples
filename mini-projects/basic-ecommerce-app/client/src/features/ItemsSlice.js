import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
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
});

export default ItemsSlice.reducer;
