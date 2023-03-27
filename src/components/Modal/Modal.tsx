import Button from 'components/Button/Button';
import React, { Component } from 'react';

export interface IModalProps {
  isActive: boolean;
  handleModal: () => void;
}

export default class Modal extends Component<IModalProps, Record<string, never>> {
  renderModal() {
    return (
      <div className="backdrop" onClick={this.props.handleModal}>
        <div className="modal">
          <p className="form-info">Your order was successfully submitted!</p>
          <Button onClick={this.props.handleModal}>Close</Button>
        </div>
      </div>
    );
  }
  render() {
    return this.props.isActive ? this.renderModal() : '';
  }
}
