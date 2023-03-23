import React, { Component } from 'react';

interface ISelect {
  refTo: React.RefObject<HTMLSelectElement>;
}

export default class Select extends Component<ISelect, Record<string, never>> {
  render() {
    const { refTo } = this.props;
    return (
      <label className="label">
        <span className="label-text">Delivery Type:</span>
        <select name="Delivery" ref={refTo} className="" defaultValue={'default'}>
          <option disabled value="default">
            Choose the delivery type
          </option>
          <option>Courier delivery</option>
          <option>Express delivery</option>
          <option>Delivery to the post office</option>
        </select>
      </label>
    );
  }
}
