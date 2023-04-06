import { useDisableBodyScroll } from 'hooks/useDisableBodyScroll';
import { IGenre, IMovie } from 'pages/HomePage/HomePage';
import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import MovieModal from '../MovieModal/MovieModal';

export interface IMovieCardList {
  movies: IMovie[];
  genres: IGenre[];
}

const MovieCardList: React.FC<IMovieCardList> = ({ movies, genres }) => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [cardId, setCardId] = useState('');

  useDisableBodyScroll(modalIsShown);

  const handleOpenModalCard = (e: React.MouseEvent<HTMLUListElement>) => {
    if (e.target instanceof HTMLElement) {
      const movieCard: HTMLElement | null = e.target.closest('.movie__card');
      if (movieCard && movieCard.dataset.id) {
        setModalIsShown(true);
        setCardId(movieCard.dataset.id);
      }
    }
  };

  const filterGenres = (movieGenreIds: number[]) => {
    return genres.filter((genre) => movieGenreIds.find((id) => id === genre.id));
  };

  return (
    <>
      {modalIsShown && <MovieModal cardId={cardId} handleModal={() => setModalIsShown(false)} />}
      {movies.length ? (
        <ul className="movie__catalog grid" onClick={handleOpenModalCard}>
          {movies.map((movie: IMovie) => (
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
