import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

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
  let button: HTMLButtonElement;
  const key = 'ElyteSearch';
  const value = 'test';

  beforeEach(() => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
    });
    search = screen.getByRole('searchbox');
    button = screen.getByRole('button', { name: /Search/i });
  });

  it('should get input value from localstorage on the component mount', () => {
    expect(search).toContainHTML('');
    act(() => {
      userEvent.type(search, value);
    });
    expect(search).toContainHTML(value);
    const aboutLink = screen.getByText('About');
    const homeLink = screen.getByText('Home');

    act(() => {
      userEvent.click(aboutLink);
      userEvent.click(homeLink);
    });

    expect(getItemMock).toHaveBeenCalled();
    expect(getItemMock).toHaveBeenCalledWith(key);
  });

  it('should save input value to localStorage on submit search', async () => {
    expect(search).toContainHTML('');

    act(() => {
      userEvent.type(search, value);
      userEvent.click(button);
    });

    await waitFor(() => {
      expect(search).toContainHTML(value);
      expect(setItemMock).toHaveBeenCalledWith(key, value);
      expect(setItemMock).toHaveBeenCalledTimes(1);
    });
  });

  it('should save input value to localStorage on press Enter key', async () => {
    expect(search).toContainHTML('');

    act(() => {
      userEvent.type(search, value);
      fireEvent.keyDown(search, { key: 'Enter', code: 'Enter' });
    });
    await waitFor(() => {
      expect(search).toContainHTML(value);
      expect(setItemMock).toHaveBeenCalledWith(key, value);
      expect(setItemMock).toHaveBeenCalledTimes(1);
    });
  });
});
