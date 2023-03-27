import React, { Component } from 'react';

export interface ISwitcher {
  refTo: React.RefObject<HTMLInputElement>;
}

export default class Switcher extends Component<ISwitcher, Record<string, never>> {
  render() {
    const { refTo } = this.props;
    return (
      <>
        <p className="form-info">Do you want to receive notifications?</p>
        <div className="switch__wrapper">
          <span className="switch__label">No</span>
          <label className="toggle-switch">
            <input type="checkbox" ref={refTo} name="notifications" id="notifications" />
            <span className="switch" />
          </label>
          <span className="switch__label">Yes</span>
        </div>
      </>
    );
  }
}
