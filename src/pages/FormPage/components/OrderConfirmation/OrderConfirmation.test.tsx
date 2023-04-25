import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import OrderConfirmation from './OrderConfirmation';
import { vi } from 'vitest';

describe('OrderConfirmation', () => {
  test('renders the confirmation message', () => {
    const handleModal = vi.fn();
    const { getByText } = render(<OrderConfirmation handleModal={handleModal} />);
    const messageElement = getByText('Your order was successfully submitted!');
    expect(messageElement).toBeInTheDocument();
  });

  test('calls handleModal when the modal is closed', () => {
    const handleModal = vi.fn();
    const { getByTestId } = render(<OrderConfirmation handleModal={handleModal} />);
    const closeButton = getByTestId('modal-close-btn');

    fireEvent.click(closeButton);

    expect(handleModal).toHaveBeenCalled();
  });
});
