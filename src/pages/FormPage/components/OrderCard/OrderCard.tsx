import React, { Component } from 'react';
import { IFormData } from '../Form/Form';

interface IOrderCard extends IFormData {
  index: number;
}

export default class OrderCard extends Component<IOrderCard> {
  constructor(props: IOrderCard) {
    super(props);
  }

  render() {
    const { index, name, date, delivery, call, notifications, image, consent } = this.props;
    return (
      <li className="">
        <p className="">{`Order #${index}`}</p>
        <p className="">{`Name: ${name}`}</p>
        <p className="">{`Delivery date: ${date}`}</p>
        <p className="">{`Delivery type: ${delivery}`}</p>
        <p className="">{`Receive notifications: ${notifications}`}</p>
        <p className="">{`Need a call: ${call}`}</p>
        <p className="">{consent && 'Accepted terms & conditions'}</p>
        <p className="">Payment Proof:</p>
        <div className="">
          <img src={image as string} alt="" />
        </div>
      </li>
    );
  }
}
