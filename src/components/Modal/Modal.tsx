import React, { FC, MouseEventHandler, ReactNode } from 'react';

export interface IModalProps {
  handleModal: MouseEventHandler<HTMLElement>;
  children: ReactNode;
}

const ModalOverlay: FC<IModalProps> = ({ handleModal, children }) => {
  return (
    <div className="modal">
      <button className="modal__close-btn" data-testid="modal-close-btn" onClick={handleModal}>
        &times;
      </button>
      <div className="modal__content">{children}</div>
    </div>
  );
};

const Modal: FC<IModalProps> = ({ handleModal, children }) => {
  return (
    <>
      <div className="backdrop" data-testid="backdrop" onClick={handleModal} />

      <ModalOverlay handleModal={handleModal}>{children}</ModalOverlay>
    </>
  );
};

export default Modal;
