import React, { MouseEventHandler } from 'react';
import Loader from 'components/Loader/Loader';
import { MOVIE_COMPANIES_URL, MOVIE_POSTER_URL } from 'utils/API';
import DefaultImg from '../../../../assets/images/poster.jpg';
import { convertDate, convertLongNumbers, convertTime } from 'utils/helpers';
import Modal from 'components/Modal/Modal';
import { IGenre } from 'pages/HomePage/HomePage';
import { useGetDetailedMovieQuery } from 'store/modalAPI';

export interface IDetailedMovie {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  } | null;
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string | null;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

type ModalCardProps = {
  cardId: string;
  handleModal: MouseEventHandler<HTMLElement>;
};

const MovieModal = ({ cardId, handleModal }: ModalCardProps) => {
  const { data, isLoading, isError } = useGetDetailedMovieQuery(cardId);
  const movie = data;

  const convertedDate = movie?.release_date
    ? convertDate(movie.release_date, { month: '2-digit' })
    : null;
  const date = convertedDate ? (
    <span data-testid="modal-card-date">
      {convertedDate.day}/{convertedDate.month}/{convertedDate.year}
    </span>
  ) : null;
  const posterPath = movie?.poster_path
    ? MOVIE_POSTER_URL + movie.poster_path
    : DefaultImg;
  const movieGenres = movie?.genres.length ? (
    <span data-testid="modal-card-genres">
      {movie.genres.map((genre) => genre.name).join(', ')}
    </span>
  ) : null;

  if (isLoading) {
    return (
      <Modal handleModal={handleModal}>
        <Loader />
      </Modal>
    );
  }

  if (isError || !movie) {
    return (
      <Modal handleModal={handleModal}>
        <p className="notification-message">
          Something went wrong... Check your internet connection.
        </p>
      </Modal>
    );
  }

  return (
    <Modal handleModal={handleModal}>
      <div className="movie-modal" data-testid="movie-modal">
        <div className="movie-modal__image">
          <img
            data-testid="movie-modal-poster"
            src={posterPath}
            alt={movie.title}
          />
        </div>
        <div className="movie-modal__info">
          <h3 className="movie-modal__title">
            {movie.title} {convertedDate && <span>({convertedDate.year})</span>}
          </h3>
          <div className="movie-modal__details">
            {date}
            {movieGenres}
            <span>{convertTime(movie.runtime)}</span>
          </div>
          <div className="movie-modal__numbers">
            <p>
              <span className="label-text">Budget:</span>
              {convertLongNumbers(movie.budget) === '0'
                ? 'N/A'
                : convertLongNumbers(movie.budget)}
            </p>
            <p>
              <span className="label-text">Revenue:</span>
              {convertLongNumbers(movie.revenue) === '0'
                ? 'N/A'
                : convertLongNumbers(movie.revenue)}
            </p>
            <p>
              <span className="label-text">Rating:</span>
              {movie.vote_average.toFixed(1) === '0.0'
                ? 'N/A'
                : movie.vote_average.toFixed(1)}
            </p>
          </div>
          <div className="movie-modal__overview">
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </div>
          <div className="movie-modal__production">
            {movie.production_companies.map((company) =>
              company.logo_path ? (
                <span key={company.id}>
                  <img
                    src={MOVIE_COMPANIES_URL + company.logo_path}
                    alt={company.name}
                  />
                </span>
              ) : null
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MovieModal;
