import Button from 'components/Button/Button';
import React from 'react';

export interface IModalProps {
  isActive: boolean;
  handleModal: () => void;
}

const Modal = ({ isActive, handleModal }: IModalProps) => {
  const renderModal = () => {
    return (
      <div className="backdrop" onClick={handleModal}>
        <div className="modal">
          <p className="form-info">Your order was successfully submitted!</p>
          <Button onClick={handleModal}>Close</Button>
        </div>
      </div>
    );
  };

  return isActive ? renderModal() : null;
};

export default Modal;
