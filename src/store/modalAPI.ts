import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IDetailedMovie } from 'pages/HomePage/components/MovieModal/MovieModal';
import { MOVIE_API_KEY } from 'utils/API';

export const modalAPI = createApi({
  reducerPath: 'modalAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/movie/' }),
  endpoints: (build) => ({
    getDetailedMovie: build.query<IDetailedMovie, string>({
      query: (id: string) => ({
        url: id,
        params: {
          api_key: MOVIE_API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetDetailedMovieQuery } = modalAPI;
