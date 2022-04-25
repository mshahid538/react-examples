import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/MoviesSlice";
import imagePathReducer from "./features/ImageConfigureSlice";

export const store = configureStore({
  reducer: {
    Movies: moviesReducer,
    ImagePath: imagePathReducer,
  },
});
