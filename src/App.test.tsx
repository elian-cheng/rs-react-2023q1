import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

describe('App', () => {
  it('should render App component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    });
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    expect(screen.getByText('Catalog')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
