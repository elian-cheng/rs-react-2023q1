import axios, { AxiosError } from 'axios';
import Loader from 'components/Loader/Loader';
import React, { useState, useEffect, FC, useCallback } from 'react';
import { MOVIE_API_KEY } from 'utils/API';
import MovieCardList from './components/MovieCardList/MovieCardList';
import SearchForm from './components/SearchForm/SearchForm';

export interface IGenres {
  id: number;
  name: string;
}

export interface IMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const HomePage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [genres, setGenres] = useState<IGenres[]>([]);

  const getGenres = async () => {
    try {
      const genresRequest = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${MOVIE_API_KEY}`
      );
      return genresRequest.data.genres;
    } catch (err: unknown) {
      setIsError(true);
      const error = err as AxiosError;
      throw new Error(error.message);
    }
  };

  const searchMovies = async (search: string, page: number) => {
    try {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}&api_key=${MOVIE_API_KEY}`
      );
      return movies.data.results;
    } catch (err) {
      setIsError(true);
      const error = err as AxiosError;
      throw new Error(error.message);
    }
  };

  const getMovies = async (page: number) => {
    try {
      const moviesRequest = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${MOVIE_API_KEY}`
      );
      return moviesRequest.data.results;
    } catch (err) {
      setIsError(true);
      const error = err as AxiosError;
      throw new Error(error.message);
    }
  };

  const renderMovies = useCallback((search: string) => {
    setIsLoading(true);
    if (search) {
      searchMovies(search, 1).then((movies: IMovies[]) => {
        setMovies(movies);
        setIsLoading(false);
      });
    } else {
      getMovies(1).then((movies) => {
        setMovies(movies);
        setIsLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    renderMovies(localStorage.getItem('ElyteSearch') || '');
    getGenres().then((genres) => setGenres(genres));
  }, [renderMovies]);

  const renderCards = () => {
    if (isError) {
      return (
        <p className="notification-message">
          Something went wrong... Check your internet connection.
        </p>
      );
    }
    return isLoading ? <Loader /> : <MovieCardList genres={genres} movies={movies} />;
  };

  return (
    <>
      <div className="home__top">
        <h2>Catalog</h2>
        <SearchForm onEnterMovie={renderMovies} />
      </div>
      {renderCards()}
    </>
  );
};

export default HomePage;
