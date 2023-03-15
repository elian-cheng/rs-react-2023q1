import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';
import userEvent from '@testing-library/user-event';

describe('Search Form', () => {
  let search: HTMLInputElement;
  beforeEach(() => {
    render(<SearchForm />);
    search = screen.getByRole('searchbox');
  });

  it('should render correctly', () => {
    expect(search).toBeInTheDocument();
    const searchForm = screen.getByPlaceholderText('Search product here...');
    expect(searchForm).toBeInTheDocument();
  });

  it('should change the input value', () => {
    userEvent.type(search, 'testing');
    expect(search).toContainHTML('testing');
    fireEvent.change(search, { target: { value: 'test' } });
    expect(search).toContainHTML('test');
  });

  it('should have input element focus', () => {
    expect(search).not.toHaveFocus();
    search.focus();
    expect(search).toHaveFocus();
  });

  // it('should call localStorage getItem on mount', () => {
  //   render(<SearchForm />);
  //   expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  // });
});
