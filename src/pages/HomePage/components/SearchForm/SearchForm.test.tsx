import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import SearchForm from './SearchForm';

describe('Search Form', () => {
  let search: HTMLInputElement;
  const handleSearch = jest.fn();
  beforeEach(() => {
    act(() => {
      render(<SearchForm onEnterMovie={handleSearch} />);
    });
    search = screen.getByRole('searchbox');
  });

  it('should render the component correctly', () => {
    expect(search).toBeInTheDocument();
    const searchForm = screen.getByPlaceholderText('Search movie here...');
    expect(searchForm).toBeInTheDocument();
  });

  it('should change the input value', () => {
    act(() => {
      userEvent.type(search, 'testing');
    });
    expect(search).toContainHTML('testing');
    act(() => {
      fireEvent.change(search, { target: { value: 'test' } });
    });
    expect(search).toContainHTML('test');
  });

  it('should have input element focus', () => {
    expect(search).not.toHaveFocus();
    act(() => {
      search.focus();
    });
    expect(search).toHaveFocus();
  });

  it('should handle search on press enter', () => {
    act(() => {
      fireEvent.keyDown(search, { key: 'Enter', code: 'Enter' });
    });
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });

  it('should not handle search on pressing other keys', () => {
    act(() => {
      fireEvent.keyDown(search, { key: 'Esc', code: 'Esc' });
      fireEvent.keyDown(search, { key: 'Space', code: 'Space' });
    });
    expect(handleSearch).toHaveBeenCalledTimes(0);
  });
});
