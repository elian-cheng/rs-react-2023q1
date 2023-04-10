import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Modal, { IModalProps } from './Modal';
import { act } from 'react-dom/test-utils';

describe('Modal', () => {
  const handleClose = jest.fn();
  const modalProps: IModalProps = {
    handleModal: handleClose,
    children: <div>Modal content</div>,
  };

  beforeEach(() => {
    act(() => {
      render(<Modal {...modalProps} />);
    });
  });

  it('should render the component correctly', async () => {
    await waitFor(() => {
      expect(screen.getByText('Modal content')).toBeInTheDocument();
      expect(screen.getByTestId('backdrop')).toBeInTheDocument();
    });
  });
});
