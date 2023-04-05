import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';
import { act } from 'react-dom/test-utils';

describe('Modal', () => {
  let modal: HTMLElement | null;

  const renderModal = () => {
    act(() => {
      const mock = jest.fn();
      render(
        <Modal handleModal={mock}>
          <p className="form-info">Your order was successfully submitted!</p>
        </Modal>
      );
    });
    modal = screen.queryByText(/Your order was successfully submitted!/i);
  };

  it('should render the component correctly', () => {
    renderModal();
    expect(modal).toBeInTheDocument();
  });
});
