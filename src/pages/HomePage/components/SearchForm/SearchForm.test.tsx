import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import HomePage from 'pages/HomePage/HomePage';

describe('Search Form', () => {
  let search: HTMLInputElement;
  beforeEach(() => {
    act(() => {
      act(() => {
        render(<HomePage />);
      });
    });
    search = screen.getByRole('searchbox');
  });

  it('should render correctly', () => {
    expect(search).toBeInTheDocument();
    const searchForm = screen.getByPlaceholderText('Search product here...');
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
});
