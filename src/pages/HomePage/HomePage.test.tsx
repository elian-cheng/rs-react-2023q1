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
    expect(screen.getByText('Catalog')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    const productCards = screen.getAllByRole('listitem');
    expect(productCards.length).toBe(12);
  });
});
