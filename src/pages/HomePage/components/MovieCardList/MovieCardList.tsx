import { IGenres, IMovies } from 'pages/HomePage/HomePage';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

export interface IMovieCardList {
  movies: IMovies[];
  genres: IGenres[];
}

const MovieCardList: React.FC<IMovieCardList> = ({ movies, genres }) => {
  // const [isOpenCardModal, setIsOpenCardModal] = useState(false);
  // const [cardId, setCardId] = useState('');

  const handleOpenModalCard = (e: React.MouseEvent<HTMLUListElement>) => {
    if (e.target instanceof HTMLElement) {
      const movieCard: HTMLElement | null = e.target.closest('.movie__card');
      if (movieCard && movieCard.dataset.id) {
        // setIsOpenCardModal(true);
        // setCardId(movieCard.dataset.id);
      }
    }
  };

  const filterGenres = (movieGenreIds: number[]) => {
    return genres.filter((genre) => movieGenreIds.find((id) => id === genre.id));
  };

  return (
    <>
      {/* {isOpenCardModal && <ModalCard cardId={cardId} onConfirm={() => setIsOpenCardModal(false)} />} */}
      {movies.length ? (
        <ul className="movie__catalog grid" onClick={handleOpenModalCard}>
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
