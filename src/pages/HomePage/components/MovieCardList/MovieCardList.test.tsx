import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MovieCardList, { IMovieCardList } from '../MovieCardList/MovieCardList';
import { IMovie, IGenre } from 'pages/HomePage/HomePage';
import { act } from 'react-dom/test-utils';

describe('MovieCardList', () => {
  const movies: IMovie[] = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      poster_path: '/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg',
      genre_ids: [18, 80],
      release_date: '1994-09-23',
      overview:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      vote_average: 8.2,
      backdrop_path: '/backdrop1.jpg',
      vote_count: 100,
      adult: false,
      original_language: 'en',
      original_title: 'Original title 1',
      popularity: 123,
      video: false,
    },
    {
      id: 2,
      title: 'The Godfather',
      poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      genre_ids: [18, 80],
      release_date: '1972-03-14',
      overview:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      vote_average: 8.7,
      backdrop_path: '/backdrop2.jpg',
      vote_count: 200,
      adult: false,
      original_language: 'en',
      original_title: 'Original title 2',
      popularity: 234,
      video: false,
    },
  ];

  const genres: IGenre[] = [
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 80,
      name: 'Crime',
    },
  ];

  const setup = (props: IMovieCardList) => {
    return render(<MovieCardList {...props} />);
  };

  it('should render a list of movie cards', () => {
    const { getByText } = setup({ movies, genres });

    movies.forEach((movie) => {
      expect(getByText(movie.title)).toBeInTheDocument();
      expect(getByText(movie.vote_average)).toBeInTheDocument();
      expect(getByText(movie.popularity)).toBeInTheDocument();
    });
  });

  it('should show a notification message if there are no movies', () => {
    const { getByText } = setup({ movies: [], genres });

    expect(getByText('Sorry, there are no movies found')).toBeInTheDocument();
  });

  it('should show if there is an error on opening the modal', async () => {
    const { getAllByRole } = setup({ movies, genres });
    const movieCards = getAllByRole('listitem');
    act(() => {
      fireEvent.click(movieCards[0]);
    });
    await screen.findByText('Something went wrong... Check your internet connection.');

    expect(
      screen.getByText('Something went wrong... Check your internet connection.')
    ).toBeInTheDocument();
  });
});
