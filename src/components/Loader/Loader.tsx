import React, { FC } from 'react';
import loader from '../../assets/icons/loader/loader.svg';

const Loader: FC = () => {
  return (
    <div className="loader__wrapper">
      <div className="loader">
        <img src={loader} alt="loader icon" />
      </div>
    </div>
  );
};

export default Loader;
