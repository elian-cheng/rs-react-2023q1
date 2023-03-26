import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';
import { act } from 'react-dom/test-utils';

describe('Modal', () => {
  let modal: HTMLElement | null;
  let isActive = true;

  const renderModal = () => {
    act(() => {
      const mock = jest.fn();
      render(<Modal isActive={isActive} handleModal={mock} />);
    });
    modal = screen.queryByText(/Your order was successfully submitted!/i);
  };

  it('should render the component correctly', () => {
    renderModal();
    expect(modal).toBeInTheDocument();
  });

  it("shouldn't render component while inactive", () => {
    isActive = false;
    renderModal();
    expect(modal).not.toBeInTheDocument();
  });
});
