import React, { Component } from 'react';
import { IFormData } from '../Form/Form';
import OrderCard from '../OrderCard/OrderCard';

interface IOrderCardList {
  ordersData: IFormData[];
}

export default class OrderCardList extends Component<IOrderCardList> {
  render() {
    return (
      <ul className="">
        {this.props.ordersData.map((order: IFormData, index: number) => {
          return (
            <OrderCard
              key={index}
              index={this.props.ordersData.length - index}
              name={order.name}
              date={order.date}
              delivery={order.delivery}
              call={order.call}
              notifications={order.notifications}
              image={order.image}
              consent={order.consent}
            />
          );
        })}
      </ul>
    );
  }
}
