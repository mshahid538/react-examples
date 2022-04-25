import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    value: [], 
};

export const MoviesSlice = createSlice({
    name: 'Movies', 
    initialState, 
    reducers: {
        saveMoviesList: (state, action)=>{
            state.value = action.payload;
        },
    },
});

export const { saveMoviesList } = MoviesSlice.actions;

export default MoviesSlice.reducer;