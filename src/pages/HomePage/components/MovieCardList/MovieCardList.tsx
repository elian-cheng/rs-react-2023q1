import { IGenres, IMovies } from 'pages/HomePage/HomePage';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

export interface IMovieCardList {
  movies: IMovies[];
  genres: IGenres[];
}

const MovieCardList: React.FC<IMovieCardList> = ({ movies, genres }) => {
  const filterGenres = (genreIds: number[]) => {
    return genres.filter((genre) => genreIds.find((id) => id === genre.id));
  };

  return (
    <>
      {movies.length ? (
        <ul className="movie__catalog grid">
          {movies.map((movie: IMovies) => (
            <MovieCard
              key={movie.id}
              cardId={movie.id}
              genres={filterGenres(movie.genre_ids)}
              {...movie}
            />
          ))}
        </ul>
      ) : (
        <p className="notification-message">Sorry, there are no movies found</p>
      )}
    </>
  );
};

export default MovieCardList;
