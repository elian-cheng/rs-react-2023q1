import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../Form/Form';
import { act } from 'react-dom/test-utils';

describe('Select', () => {
  let delivery: HTMLSelectElement;
  let submitBtn: HTMLButtonElement;

  beforeEach(() => {
    act(() => {
      const mock = jest.fn();
      render(<Form setFormState={mock} />);
    });
    delivery = screen.getByRole('combobox');
    submitBtn = screen.getByText(/Submit/i);
  });

  it('should render the component correctly', () => {
    expect(delivery).toBeInTheDocument();
    expect(delivery.value).toBe('default');
    expect(document.querySelectorAll('option').length).toBe(4);
  });

  it('should not produce errors with the correct select', async () => {
    act(() => {
      fireEvent.change(delivery, { target: { value: 'Express' } });
    });
    expect(delivery).toContainHTML('Express');
    act(() => {
      userEvent.click(submitBtn);
    });
    const errorMessage = await screen.findByTestId('deliverySelectError');
    expect(errorMessage.textContent).toHaveLength(0);
  });
});
