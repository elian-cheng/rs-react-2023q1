import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import MovieModal, { IDetailedMovie } from './MovieModal';
import { vi } from 'vitest';

vi.mock('axios');
const mockedAxios = vi.mocked(axios);
const mockedAxiosGet = vi.mocked(mockedAxios.get);

const mockMovie: IDetailedMovie = {
  adult: false,
  backdrop_path: '/abc123.jpg',
  belongs_to_collection: null,
  budget: 10000000,
  genres: [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Drama' },
  ],
  homepage: '',
  id: 1,
  imdb_id: 'tt123456',
  original_language: 'en',
  original_title: 'The Test Movie',
  overview: 'A test movie for Jest',
  popularity: 123.45,
  poster_path: '/def456.jpg',
  production_companies: [
    {
      id: 1,
      logo_path: '/ghi789.jpg',
      name: 'Test Production Company',
      origin_country: 'US',
    },
  ],
  production_countries: [{ iso_3166_1: 'US', name: 'United States of America' }],
  release_date: '2022-01-01',
  revenue: 50000000,
  runtime: 120,
  spoken_languages: [
    { english_name: 'English', iso_639_1: 'en', name: 'English' },
    { english_name: 'Spanish', iso_639_1: 'es', name: 'Español' },
  ],
  status: 'Released',
  tagline: 'A movie for testing purposes only',
  title: 'The Test Movie',
  video: false,
  vote_average: 7.5,
  vote_count: 1234,
};

describe('MovieModal', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render loading indicator when loading', async () => {
    mockedAxiosGet.mockResolvedValueOnce({
      data: mockMovie,
    });

    render(<MovieModal cardId="1" handleModal={() => {}} />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();

    await screen.findByTestId('movie-modal');

    expect(screen.getByTestId('movie-modal')).toBeInTheDocument();
  });

  it('should render error message when there is an error', async () => {
    mockedAxiosGet.mockRejectedValueOnce(new Error());

    render(<MovieModal cardId="1" handleModal={() => {}} />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();

    await screen.findByText('Something went wrong... Check your internet connection.');

    expect(
      screen.getByText('Something went wrong... Check your internet connection.')
    ).toBeInTheDocument();
  });

  it('should render movie details when loaded successfully', async () => {
    mockedAxiosGet.mockResolvedValueOnce({
      data: mockMovie,
    });

    render(<MovieModal cardId="1" handleModal={() => {}} />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();

    await screen.findByTestId('movie-modal');

    expect(screen.getByTestId('movie-modal')).toBeInTheDocument();

    expect(screen.getByTestId('movie-modal-poster')).toHaveAttribute(
      'src',
      'https://image.tmdb.org/t/p/w300_and_h450_bestv2/def456.jpg'
    );

    expect(screen.getByText('The Test Movie')).toBeInTheDocument();

    expect(screen.getByTestId('modal-card-date')).toHaveTextContent('01/01/2022');
  });
});
