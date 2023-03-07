import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchFilms = createAsyncThunk('films/fetchFilms', () => {
  return axios.get('http://www.omdbapi.com/?apikey=7bf50757&s=thor').then((response) => response.data)
})

const initialState = {
  loading: false,
  films: {}
};

export const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.loading = false;
      state.films = action.payload;
      state.error = '';
    })
  }
});

export const { increment } = filmSlice.actions;

export default filmSlice.reducer;
