import React from 'react';
import Card from 'components/Card/Card';
import { ReactComponent as EyeIcon } from '../../../../assets/icons/movie/eye.svg';
import defaultImg from '../../../../assets/images/poster.jpg';
import { convertDate, convertLongNumbers } from 'utils/helpers';
import { IGenre } from 'pages/HomePage/HomePage';
import { MOVIE_POSTER_URL } from 'utils/API';
export interface IMovieCard {
  popularity: number;
  poster_path: string | null;
  release_date: string | null;
  title: string;
  vote_average: number;
  genres: IGenre[];
  cardId: number;
}

const MovieCard: React.FC<IMovieCard> = ({
  poster_path,
  vote_average,
  popularity,
  title,
  genres,
  cardId,
  release_date,
}) => {
  let poster = defaultImg;
  if (poster_path) {
    poster = MOVIE_POSTER_URL + poster_path;
  }

  let date = 'unknown';
  if (release_date) {
    const convertedDate = convertDate(release_date, { month: 'long' });
    date = `${convertedDate.month.slice(0, 3)} ${convertedDate.day}, ${convertedDate.year}`;
  }

  return (
    <Card dataId={cardId} className="movie__card">
      <div className="card__image">
        <img src={poster} alt={title} data-testid="card-img" />
      </div>
      <div className="card__rating" data-testid="card-rating">
        {vote_average.toFixed(1)}
      </div>
      <div className="card__info">
        <h3 className="card__title" data-testid="card-title">
          {title}
        </h3>
        <div className="card__genres">
          {genres.map((genre) => (
            <p className="card__genre-item" key={genre.id} data-testid="card-genre">
              {genre.name}
            </p>
          ))}
        </div>
      </div>
      <div className="card__data">
        <p className="card__date" data-testid="card-date">
          {date}
        </p>
        <div className="card__views">
          <EyeIcon fill="rgba(0, 0, 0, 0.4)" width="16px" height="16px" />
          <span>{convertLongNumbers(popularity)}</span>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
