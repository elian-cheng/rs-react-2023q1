import React, { Component } from 'react';

interface ISelect {
  refTo: React.RefObject<HTMLSelectElement>;
  errorMessage: string;
  isValid: boolean;
}

export default class Select extends Component<ISelect, Record<string, never>> {
  render() {
    const { refTo, isValid, errorMessage } = this.props;
    return (
      <>
        <div className="select">
          <label htmlFor="delivery" className="select__label label-text">
            Delivery Type:
          </label>
          <select
            data-testid="deliverySelect"
            name="Delivery"
            ref={refTo}
            className={!isValid ? 'select__options input-error' : 'select__options'}
            id="delivery"
            defaultValue="default"
          >
            <option disabled value="default">
              Choose the delivery type
            </option>
            <option>Courier</option>
            <option>Express</option>
            <option>Post office</option>
          </select>
        </div>
        <p className="error-message" data-testid="deliverySelectError">
          {errorMessage}
        </p>
      </>
    );
  }
}
