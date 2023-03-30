import React, { useState } from 'react';
import Form, { IFormData } from './components/Form/Form';
import OrderCardList from './components/OrderCardList/OrderCardList';

export interface IFormPage {
  ordersData: IFormData[] | [];
}

const FormPage: React.FC = () => {
  const [ordersData, setOrdersData] = useState<IFormData[]>([]);

  const setFormState = (newState: IFormData) => {
    setOrdersData([newState, ...ordersData]);
  };

  return (
    <>
      <div className="orders__form-wrapper">
        <Form setFormState={setFormState} />
      </div>
      <h2 className="orders__title">Your orders:</h2>
      {ordersData.length ? (
        <OrderCardList ordersData={ordersData} />
      ) : (
        <p className="orders__subtitle">There are no orders yet</p>
      )}
    </>
  );
};

export default FormPage;
