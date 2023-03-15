import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutPage from './AboutPage';

describe('About Page', () => {
  it('should render the component correctly', () => {
    render(<AboutPage />);
    expect(screen.getByText('Who are we?')).toBeInTheDocument();
    expect(document.querySelectorAll('p').length).toBe(2);
  });
});
