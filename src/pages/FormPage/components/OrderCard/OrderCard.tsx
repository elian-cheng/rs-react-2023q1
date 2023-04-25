import Card from 'components/Card/Card';
import React from 'react';
import { IFormData } from '../Form/Form';

interface IOrderCard extends IFormData {
  index: number;
}

const OrderCard = ({
  index,
  name,
  date,
  delivery,
  call,
  notifications,
  image,
  consent,
}: IOrderCard) => {
  return (
    <Card>
      <div className="card__image">
        <img className="order-card__image" src={image as string} alt="order-image" />
      </div>
      <div className="order__content">
        <p className="order__number">{`Order #${index}`}</p>
        <p className="order__item order-card__title">
          <span className="label-text">Name:</span>
          {name}
        </p>
        <p className="order__item order-card__date">
          <span className="label-text">Delivery date:</span>
          {date}
        </p>
        <p className="order__item order-card__delivery">
          <span className="label-text">Delivery type:</span>
          {delivery}
        </p>
        <p className="order__item order-card__call">
          <span className="label-text">Need a call:</span>
          {call}
        </p>
        <p className="order__item order-card__notifications">
          <span className="label-text">Receive notifications:</span>
          {notifications}
        </p>
        <p className="order__item order-card__consent">
          <span className="label-text">Accepted terms:</span>
          {consent}
        </p>
      </div>
    </Card>
  );
};

export default OrderCard;
