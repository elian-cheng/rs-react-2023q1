import Loader from 'components/Loader/Loader';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect, FC, useCallback } from 'react';
import { getGenres, getMovies, searchMovies } from 'store/searchSlice';
import MovieCardList from './components/MovieCardList/MovieCardList';
import SearchForm from './components/SearchForm/SearchForm';

export interface IGenre {
  id: number;
  name: string;
}

export interface IMovie {
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
  const dispatch = useAppDispatch();
  const { search, isLoading, isError, movies, genres } = useAppSelector((state) => state.search);

  const renderMovies = useCallback(
    (search: string) => {
      if (search) {
        dispatch(searchMovies({ search, page: 1 }));
      } else {
        dispatch(getMovies(1));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    renderMovies(search);
    dispatch(getGenres());
  }, [renderMovies, dispatch, search]);

  const renderContent = () => {
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
        <SearchForm onEnterMovie={renderMovies} />
      </div>
      {renderContent()}
    </>
  );
};

export default HomePage;
