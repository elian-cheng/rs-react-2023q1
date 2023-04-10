import React, { FC } from 'react';
import { ReactComponent as LoaderImg } from '../../assets/icons/loader/loader.svg';

const Loader: FC = () => {
  return (
    <div className="loader__wrapper">
      <div className="loader" data-testid="loader">
        <LoaderImg />
      </div>
    </div>
  );
};

export default Loader;
