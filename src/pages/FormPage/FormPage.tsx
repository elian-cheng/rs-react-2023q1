import React, { Component } from 'react';
import Form, { IFormData } from './components/Form/Form';
import OrderCardList from './components/OrderCardList/OrderCardList';

export interface IFormPage {
  ordersData: IFormData[] | [];
}

export default class FormPage extends Component<object, IFormPage> {
  constructor(props: object) {
    super(props);
    this.setFormState = this.setFormState.bind(this);
    this.state = {
      ordersData: [],
    };
  }

  setFormState(newState: IFormData) {
    this.setState({ ordersData: [newState, ...this.state.ordersData] });
  }

  render() {
    return (
      <div className="orders__wrapper">
        <div className="orders__form-wrapper">
          <Form setFormState={this.setFormState} />
        </div>
        <h2 className="orders__title">Your orders:</h2>
        {this.state.ordersData.length ? (
          ''
        ) : (
          <p className="orders__subtitle">There are no orders yet</p>
        )}
        <OrderCardList ordersData={this.state.ordersData} />
      </div>
    );
  }
}
