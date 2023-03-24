import React, { Component } from 'react';
import Input from '../Input/Input';

interface IRadio {
  callYes: React.RefObject<HTMLInputElement>;
  callNo: React.RefObject<HTMLInputElement>;
}

export default class Radio extends Component<IRadio, Record<string, never>> {
  render() {
    const { callYes, callNo } = this.props;
    return (
      <>
        <p className="form-info">Do you need an order confirmation call?</p>
        <Input
          label="Yes, I need a call"
          ref={callYes}
          input={{
            id: 'call-yes',
            name: 'call',
            type: 'radio',
            value: 'Yes',
          }}
        />
        <Input
          label="No, don't call me"
          ref={callNo}
          input={{
            id: 'call-no',
            name: 'call',
            type: 'radio',
            value: 'No',
          }}
        />
      </>
    );
  }
}
