import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mocked } from 'jest-mock';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import HomePage, { IGenre, IMovie } from './HomePage';
import { Provider } from 'react-redux';
import store from 'store';

jest.mock('axios');
const mockedAxios = mocked(axios);
const mockedAxiosGet = mocked(mockedAxios.get);

describe('Home', () => {
  let testMovies: IMovie[];
  let testGenres: IGenre[];
  beforeAll(() => {
    testMovies = [
      {
        adult: false,
        backdrop_path: '/ovM06PdF3M8wvKb06i4sjW3xoww.jpg',
        genre_ids: [878, 12, 28],
        id: 76600,
        original_language: 'en',
        original_title: 'Avatar: The Way of Water',
        overview:
          'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
        popularity: 8097.311,
        poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
        release_date: '2022-12-14',
        title: 'Avatar: The Way of Water',
        video: false,
        vote_average: 7.8,
        vote_count: 6519,
      },
      {
        adult: false,
        backdrop_path: '/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg',
        genre_ids: [18, 28],
        id: 677179,
        original_language: 'en',
        original_title: 'Creed III',
        overview:
          'After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damien Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damien — a fighter who has nothing to lose.',
        popularity: 4219.94,
        poster_path: '/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg',
        release_date: '2023-03-01',
        title: 'Creed III',
        video: false,
        vote_average: 7.3,
        vote_count: 666,
      },
      {
        adult: false,
        backdrop_path: '/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg',
        genre_ids: [27, 53],
        id: 980078,
        original_language: 'en',
        original_title: 'Winnie the Pooh: Blood and Honey',
        overview:
          'Christopher Robin is headed off to college and he has abandoned his old friends, Pooh and Piglet, which then leads to the duo embracing their inner monsters.',
        popularity: 2757.999,
        poster_path: '/s3u70iZ1mpY6W9rW1S6BxDMRNQt.jpg',
        release_date: '2023-01-27',
        title: 'Winnie the Pooh: Blood and Honey',
        video: false,
        vote_average: 5.9,
        vote_count: 345,
      },
    ];
    testGenres = [
      {
        id: 28,
        name: 'Action',
      },
      {
        id: 12,
        name: 'Adventure',
      },
      {
        id: 16,
        name: 'Animation',
      },
      {
        id: 35,
        name: 'Comedy',
      },
    ];
  });
  beforeEach(() => {
    mockedAxiosGet.mockReturnValue(
      Promise.resolve({ data: { results: testMovies, genres: testGenres } })
    );
  });
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should render the component correctly', async () => {
    act(() => {
      render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );
    });
    await waitFor(() => {
      expect(screen.getByRole('searchbox')).toBeInTheDocument();
      const searchButton = screen.getByRole('button', { name: 'Search' });
      expect(searchButton).toBeInTheDocument();
    });
  });

  it('should search for the movie when using search input', async () => {
    act(() => {
      render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );
    });

    const cardItems = await screen.findAllByRole('listitem');
    expect(cardItems.length).toBe(3);

    const search = screen.getByRole('searchbox');
    mockedAxiosGet.mockReset();
    mockedAxiosGet.mockReturnValue(
      Promise.resolve({
        data: {
          results: [
            {
              adult: false,
              backdrop_path: '/ovM06PdF3M8wvKb06i4sjW3xoww.jpg',
              genre_ids: [878, 12, 28],
              id: 76600,
              original_language: 'en',
              original_title: 'Avatar: The Way of Water',
              overview:
                'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
              popularity: 8097.311,
              poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
              release_date: '2022-12-14',
              title: 'Avatar: The Way of Water',
              video: false,
              vote_average: 7.8,
              vote_count: 6519,
            },
          ],
          genres: testGenres,
        },
      })
    );

    act(() => {
      fireEvent.change(search, { target: { value: 'Avatar' } });
      fireEvent.keyDown(search, { code: 'Enter', key: 'Enter' });
    });

    const updatedCardItems = await screen.findAllByRole('listitem');
    expect(updatedCardItems.length).toBe(1);
  });
});
