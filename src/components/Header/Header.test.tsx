import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  let homeLink: HTMLElement;
  let aboutLink: HTMLElement;
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    homeLink = screen.getByText(/home/i);
    aboutLink = screen.getByText(/about us/i);
  });

  it('should render the component correctly', () => {
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    const logo = document.querySelector('.header__logo');
    expect(logo).toBeInTheDocument();
  });

  it('should render navigation links correctly', () => {
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
