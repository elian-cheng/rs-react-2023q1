import { rest } from 'msw';
import { fetch, Headers, Request, Response } from 'cross-fetch';
import { IDetailedMovie } from 'pages/HomePage/components/MovieModal/MovieModal';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const commonMovie = {
  results: [
    {
      poster_path: '/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg',
      adult: false,
      overview:
        'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
      release_date: '2009-12-10',
      genre_ids: [28, 12, 14, 878],
      id: 19995,
      original_title: 'Avatar',
      original_language: 'en',
      title: 'Avatar',
      backdrop_path: '/t9nyF3r0WAlJ7Kr6xcRYI4jr9jm.jpg',
      popularity: 62.059,
      vote_count: 26350,
      video: false,
      vote_average: 7.5,
    },
  ],
};

export const searchMovie = {
  results: [
    {
      poster_path: '/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg',
      adult: false,
      overview:
        'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
      release_date: '2009-12-10',
      genre_ids: [28, 12, 14, 878],
      id: 19995,
      original_title: 'Avatar',
      original_language: 'en',
      title: 'Avatar',
      backdrop_path: '/t9nyF3r0WAlJ7Kr6xcRYI4jr9jm.jpg',
      popularity: 62.059,
      vote_count: 26350,
      video: false,
      vote_average: 7.5,
    },
  ],
};

export const modalMovie: IDetailedMovie = {
  adult: false,
  backdrop_path: '/8nCr9W7sKus2q9PLbYsnT7iCkuT.jpg',
  belongs_to_collection: {
    id: 87096,
    name: 'Avatar Collection',
    poster_path: '/lQ5lPtrtGcXFswVQYYLFly8wN.jpg',
    backdrop_path: '/uJFEujEm8I1K9jvzyYNfRujT6Tn.jpg',
  },
  budget: 237000000,
  genres: [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 14, name: 'Fantasy' },
    { id: 878, name: 'Science Fiction' },
  ],
  homepage: 'http://www.avatarmovie.com/',
  id: 19995,
  imdb_id: 'tt0499549',
  original_language: 'en',
  original_title: 'Avatar',
  overview:
    'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
  popularity: 378.329,
  poster_path: '/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg',
  production_companies: [
    {
      id: 289,
      logo_path: '/5T8VvuylBgcqC1VrhSshzgpP69.jpg',
      name: 'Ingenious Film Partners',
      origin_country: 'US',
    },
    {
      id: 574,
      logo_path: '/iB6GjNVHs5hOqcEYt2rcjBqIjki.png',
      name: 'Twentieth Century Fox',
      origin_country: 'US',
    },
    {
      id: 306,
      logo_path: '/g7My5ByCbpqW7P5eLKIcCt6Nvsn.png',
      name: 'Dune Entertainment',
      origin_country: 'US',
    },
    {
      id: 444,
      logo_path: '/42UPdZl6B2cFXgNUASR8hSt9mpS.png',
      name: 'Lightstorm Entertainment',
      origin_country: 'US',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'GB',
      name: 'United Kingdom',
    },
    {
      iso_3166_1: 'US',
      name: 'United States of America',
    },
  ],
  release_date: '2009-12-10',
  revenue: 2787965087,
  runtime: 162,
  spoken_languages: [
    { english_name: 'English', iso_639_1: 'en', name: 'English' },
    { english_name: 'Spanish', iso_639_1: 'es', name: 'Español' },
  ],
  status: 'Released',
  tagline: 'Enter the World of Pandora.',
  title: 'Avatar',
  video: false,
  vote_average: 7.5,
  vote_count: 23768,
};

export const handlers = [
  rest.get('https://api.themoviedb.org/3/movie/popular', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(commonMovie));
  }),

  rest.get('https://api.themoviedb.org/3/search/movie', (req, res, ctx) => {
    const query = req.url.searchParams.get('query');
    if (query === 'movie') {
      return res(ctx.status(200), ctx.json(searchMovie));
    }
  }),

  rest.get('https://api.themoviedb.org/3/movie/:id', (req, res, ctx) => {
    const { id } = req.params;
    if (id === '101') {
      return res(ctx.status(200), ctx.json(modalMovie));
    }
  }),
];
