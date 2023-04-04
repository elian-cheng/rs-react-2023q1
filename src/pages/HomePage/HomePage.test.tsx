import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './HomePage';
import { act } from 'react-dom/test-utils';

describe('Home Page', () => {
  it('should render the component correctly', () => {
    act(() => {
      render(<HomePage />);
    });
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    const searchButton = screen.getByRole('button', { name: 'Search' });
    expect(searchButton).toBeInTheDocument();
  });
});
