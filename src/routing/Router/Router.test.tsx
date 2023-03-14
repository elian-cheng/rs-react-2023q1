import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import App from 'App';

describe('Router', () => {
  it('should navigate to HomePage when clicking the logo', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    act(() => {
      const homeLink = document.querySelector('.header__logo');
      homeLink?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const homePageContent = screen.getByText('Catalog');
    expect(homePageContent).toBeInTheDocument();
  });

  it('should navigate to AboutPage from HomePage', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    act(() => {
      const aboutLink = screen.getByText(/about us/i);
      aboutLink.click();
    });

    const aboutPageContent = screen.getByText(/We are the champions, my friends/i);
    expect(aboutPageContent).toBeInTheDocument();
  });

  it('should navigate to HomePage from AboutPage', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    act(() => {
      const homeLink = screen.getByText(/home/i);
      homeLink.click();
    });

    const searchForm = screen.getByPlaceholderText('Search product here...');
    expect(searchForm).toBeInTheDocument();
    const homePageContent = screen.getByText('Catalog');
    expect(homePageContent).toBeInTheDocument();
  });

  it('should navigate to ErrorPage on the wrong URL', () => {
    render(
      <MemoryRouter initialEntries={['/test']}>
        <App />
      </MemoryRouter>
    );

    const errorElement = document.getElementById('error-page');
    const errorNumber = screen.getByText('404');
    const errorText = screen.getByText('Oops! Page is not found');

    expect(errorElement).toBeInTheDocument();
    expect(errorNumber).toBeInTheDocument();
    expect(errorText).toBeInTheDocument();
  });
});
