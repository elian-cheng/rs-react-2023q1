import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IGenre, IMovie } from 'pages/HomePage/HomePage';
import { MOVIE_API_KEY } from 'utils/API';

interface ISearchState {
  search: string;
  movies: IMovie[];
  genres: IGenre[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: ISearchState = {
  search: '',
  movies: [],
  genres: [],
  isLoading: false,
  isError: false,
};

export const getMovies = createAsyncThunk('search/getMovies', async (page: number) => {
  try {
    const moviesRequest = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${MOVIE_API_KEY}`
    );
    return moviesRequest.data.results;
  } catch (err) {
    const error = err as AxiosError;
    throw new Error(error.message);
  }
});
export const getGenres = createAsyncThunk('search/getGenres', async () => {
  try {
    const genresRequest = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${MOVIE_API_KEY}`
    );
    return genresRequest.data.genres;
  } catch (err: unknown) {
    const error = err as AxiosError;
    throw new Error(error.message);
  }
});
export const searchMovies = createAsyncThunk(
  'search/searchMovies',
  async (params: { search: string; page: number }) => {
    try {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${params.search}&page=${params.page}&api_key=${MOVIE_API_KEY}`
      );
      return movies.data.results;
    } catch (err) {
      const error = err as AxiosError;
      throw new Error(error.message);
    }
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = false;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = false;
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isError = true;
          state.isLoading = false;
          console.error(action.error.message);
        }
      );
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
