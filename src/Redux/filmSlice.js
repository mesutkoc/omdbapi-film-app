import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSearchTerm } from '../helper';
import { API_KEY, FILMS_API, INITIAL_SEARCH_TERM } from '../constants';

export const fetchFilms = createAsyncThunk('films/fetchFilms', (searchTerm) => {
  return axios.get(`${FILMS_API}/?apiKey=${API_KEY}&${searchTerm}`).then((response) => response.data);
})

export const getFilms = (keyTerm) => async (dispatch) => {
  const term = getSearchTerm(keyTerm);
  const response = await axios.get(`${FILMS_API}/?apiKey=${API_KEY}&${term}`).then((response) => response.data);
  dispatch(fetchFilmsByPage(response));
};


const initialState = {
  loading: false,
  films: {},
  searchTerm: INITIAL_SEARCH_TERM,
  filter: ''
};

export const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    fetchFilmsByPage: (state, data) => {
      state.films = data.payload;
    },
    setFilter: (state, data) => {
      state.filter = data.payload.filter
      state.searchTerm = data.payload.searchTerm
    }
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

export const { fetchFilmsByPage, setFilter, setPage } = filmSlice.actions;

export default filmSlice.reducer;
