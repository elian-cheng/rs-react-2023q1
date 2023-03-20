import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './HomePage';

describe('Home Page', () => {
  it('should render the component correctly', () => {
    render(<HomePage />);
    expect(screen.getByText('Catalog')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    const productCards = screen.getAllByRole('listitem');
    expect(productCards.length).toBe(12);
  });
});
