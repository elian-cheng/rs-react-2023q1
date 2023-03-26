import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormPage from './FormPage';
import { act } from 'react-dom/test-utils';

describe('Form Page', () => {
  it('should render the component correctly', () => {
    act(() => {
      render(<FormPage />);
    });
    expect(screen.getByText(/Your orders:/i)).toBeInTheDocument();
    expect(screen.getByText(/There are no orders yet/i)).toBeInTheDocument();
    expect(document.querySelector('form')).toBeInTheDocument();
  });
});
