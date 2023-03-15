import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';
import { MemoryRouter } from 'react-router-dom';

const mockLocalStorage = () => {
  const setItemMock = jest.fn();
  const getItemMock = jest.fn();

  beforeEach(() => {
    Storage.prototype.setItem = setItemMock;
    Storage.prototype.getItem = getItemMock;
  });

  afterEach(() => {
    setItemMock.mockRestore();
    getItemMock.mockRestore();
  });

  return { setItemMock, getItemMock };
};

const { getItemMock, setItemMock } = mockLocalStorage();

describe('Local Storage', () => {
  let search: HTMLInputElement;
  const key = 'ElyteSearch';
  const value = 'test';

  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    search = screen.getByRole('searchbox');
  });

  it('should save input value to localStorage on the component unmount', () => {
    expect(search).toContainHTML('');
    userEvent.type(search, value);
    expect(search).toContainHTML(value);

    const aboutLink = screen.getByText(/about us/i);
    userEvent.click(aboutLink);
    expect(setItemMock).toHaveBeenCalledWith(key, value);
  });

  it('should get input value from localstorage on the component mount', () => {
    expect(search).toContainHTML('');
    userEvent.type(search, value);
    expect(search).toContainHTML(value);

    const aboutLink = screen.getByText(/about us/i);
    const homeLink = screen.getByText(/home/i);

    userEvent.click(aboutLink);
    userEvent.click(homeLink);

    expect(getItemMock).toHaveBeenCalledTimes(1);
    expect(getItemMock).toHaveBeenCalledWith(key);
  });
});
