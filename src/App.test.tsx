import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import store from 'store';

describe('App', () => {
  it('should render App component', () => {
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );
    });
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
