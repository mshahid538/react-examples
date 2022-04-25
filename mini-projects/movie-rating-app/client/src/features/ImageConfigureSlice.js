import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    value: [], 
};

export const ImageConfigureSlice = createSlice({
    name: 'ImagePath', 
    initialState, 
    reducers: {
        saveImageConfigurePath: (state, action)=>{
            state.value = action.payload;
        },
    },
});

export const { saveImageConfigurePath } = ImageConfigureSlice.actions;

export default ImageConfigureSlice.reducer;
