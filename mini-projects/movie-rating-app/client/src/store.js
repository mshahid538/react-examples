import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './features/MoviesSlice';  

export const store = configureStore({
    reducer: {
        Movies: moviesReducer, 
    },
});
