import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import { act } from 'react-dom/test-utils';

describe('Header', () => {
  let homeLink: HTMLElement;
  let aboutLink: HTMLElement;
  beforeEach(() => {
    act(() => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
    });
    homeLink = screen.getByText('Home');
    aboutLink = screen.getByText(/About Us/i);
  });

  it('should render the component correctly', () => {
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    const logo = document.querySelector('.header__logo');
    expect(logo).toBeInTheDocument();
  });

  it('should render navigation links correctly', () => {
    expect(screen.getAllByRole('link')).toHaveLength(4);
  });
});
