import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import SearchForm from './SearchForm';
import { Provider } from 'react-redux';
import store from 'store';
import { vi } from 'vitest';

describe('Search Form', () => {
  let search: HTMLInputElement;
  const handleSearch = vi.fn();
  beforeEach(() => {
    act(() => {
      render(
        <Provider store={store}>
          <SearchForm onEnterMovie={handleSearch} />
        </Provider>
      );
    });
    search = screen.getByRole('searchbox');
  });

  it('should render the component correctly', () => {
    expect(search).toBeInTheDocument();
    const searchForm = screen.getByPlaceholderText('Search movie here...');
    expect(searchForm).toBeInTheDocument();
  });

  it('should change the input value', async () => {
    await userEvent.type(search, 'testing');
    expect(search.value).toBe('testing');
  });

  it('should have input element focus', () => {
    expect(search).not.toHaveFocus();
    act(() => {
      search.focus();
    });
    expect(search).toHaveFocus();
  });

  it('should not handle search on pressing other keys', () => {
    act(() => {
      fireEvent.keyDown(search, { key: 'Esc', code: 'Esc' });
      fireEvent.keyDown(search, { key: 'Space', code: 'Space' });
    });
    expect(handleSearch).toHaveBeenCalledTimes(0);
  });

  it('should handle search on press enter', () => {
    act(() => {
      fireEvent.keyDown(search, { key: 'Enter', code: 'Enter' });
    });
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});
