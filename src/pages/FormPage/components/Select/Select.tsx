import React, { Component } from 'react';

interface ISelect {
  refTo: React.RefObject<HTMLSelectElement>;
}

export default class Select extends Component<ISelect, Record<string, never>> {
  render() {
    const { refTo } = this.props;
    return (
      <div className="select">
        <label htmlFor="delivery" className="select__label label-text">
          Delivery Type:
        </label>
        <select
          name="Delivery"
          ref={refTo}
          className="select__options"
          id="delivery"
          defaultValue="default"
        >
          <option disabled value="default">
            Choose the delivery type
          </option>
          <option>Courier delivery</option>
          <option>Express delivery</option>
          <option>Post office delivery</option>
        </select>
      </div>
    );
  }
}
