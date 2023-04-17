import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieModal from './MovieModal';
import { Provider } from 'react-redux';
import store from 'store';

describe('MovieModal', () => {
  it('should have poster image', async () => {
    render(
      <Provider store={store}>
        <MovieModal cardId="76600" handleModal={() => {}} />
      </Provider>
    );

    expect(await screen.findByTestId('movie-modal-poster')).toBeVisible();
  });

  it('should render movie data correctly', async () => {
    render(
      <Provider store={store}>
        <MovieModal cardId="76600" handleModal={() => {}} />
      </Provider>
    );
    expect(screen.getByTestId('movie-modal')).toBeInTheDocument();
    expect(screen.getByText('Science Fiction, Adventure, Action')).toBeInTheDocument();
    expect(screen.getByTestId('modal-card-date')).toHaveTextContent('14/12/2022');
    expect(await screen.findByRole('heading', { level: 3 })).toHaveTextContent(
      'Avatar: The Way of Water (2022)'
    );
  });

  it('should render the error message if there is no data or an error', async () => {
    render(
      <Provider store={store}>
        <MovieModal cardId="error" handleModal={() => {}} />
      </Provider>
    );
    expect(await screen.findByText(/Something went wrong.../i)).toBeInTheDocument();
  });
});
