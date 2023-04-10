import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MOVIE_POSTER_URL } from 'utils/API';
import MovieCard from './MovieCard';

describe('Movie Card', () => {
  let cardItem: HTMLElement;
  const testCard = {
    poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    title: 'Avatar: The Way Of Water',
    vote_average: 7.8,
    popularity: 1000,
    genres: [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Adventure' },
      { id: 3, name: 'Science Fiction' },
    ],
    release_date: '2022-12-14',
    cardId: 1405,
  };

  beforeEach(() => {
    act(() => {
      render(<MovieCard {...testCard} />);
    });
  });

  it('should render the component correctly', () => {
    cardItem = screen.getByRole('listitem');
    expect(cardItem).toBeInTheDocument();
  });

  it('should render the card props correctly', () => {
    act(() => {});
    expect(screen.getByTestId('card-img')).toHaveAttribute(
      'src',
      MOVIE_POSTER_URL + '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'
    );
    expect(screen.getByTestId('card-rating').textContent).toBe('7.8');
    expect(screen.getByTestId('card-title').textContent).toBe('Avatar: The Way Of Water');
    expect(screen.getByTestId('card-date').textContent).toBe('Dec 14, 2022');
    expect(screen.getAllByTestId('card-genre').map((p) => p.textContent)).toEqual([
      'Action',
      'Adventure',
      'Science Fiction',
    ]);
  });
});
