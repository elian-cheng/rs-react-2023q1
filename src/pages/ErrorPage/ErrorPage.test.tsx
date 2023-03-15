import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorPage from './ErrorPage';
import { MemoryRouter } from 'react-router-dom';
import App from 'App';

describe('Error Page', () => {
  it('should render the component correctly', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Oops! Page is not found')).toBeInTheDocument();
    expect(screen.getByText('Return home')).toBeInTheDocument();
    expect(document.querySelector('.error__btns')).toBeInTheDocument();
  });
});
