import React from 'react';

const Card = (props: { children: React.ReactNode }) => {
  return (
    <li className="card">
      <div className="card__content">{props.children}</div>
    </li>
  );
};
export default Card;
