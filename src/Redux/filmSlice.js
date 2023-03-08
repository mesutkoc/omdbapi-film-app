import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSearchTerm } from '../helper';
import { API_KEY, FILMS_API, INITIAL_SEARCH_TERM } from '../constants';

export const fetchFilms = createAsyncThunk('films/fetchFilms', (searchTerm) => {
  return axios.get(`${FILMS_API}?apiKey=${API_KEY}&${searchTerm}`).then((response) => response.data);
})

export const getFilms = (keyTerm) => async (dispatch) => {
  const term = getSearchTerm(keyTerm);
  const response = await axios.get(`${FILMS_API}?apiKey=${API_KEY}&${term}`).then((response) => response.data);

  dispatch(fetchFilmsByPage(response));
};

export const getContent = (i) => async (dispatch) => {
  const response = await axios.get(`${FILMS_API}?apiKey=${API_KEY}&${i}`).then((response) => response.data);
  dispatch(getContentInfo(response));
};

const initialState = {
  loading: false,
  films: {},
  searchTerm: INITIAL_SEARCH_TERM,
  filter: '',
  film: {}
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
    },
    getContentInfo: (state, data) => {
      state.film = data.payload
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

export const { fetchFilmsByPage, setFilter, getContentInfo } = filmSlice.actions;

export default filmSlice.reducer;
