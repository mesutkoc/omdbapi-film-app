import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};

export const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

});

export const { increment } = filmSlice.actions;



export default filmSlice.reducer;
