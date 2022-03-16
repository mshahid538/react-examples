import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice";
import cartReducer from "../features/CartSlice";
import itemReducer from "../features/ItemsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    item: itemReducer,
  },
});
