import React from 'react';

const Card = (props: { children: React.ReactNode; className?: string }) => {
  const cardClass = `${props.className ? props.className + ' card' : 'card'}`;
  return (
    <li className={cardClass}>
      <div className="card__content">{props.children}</div>
    </li>
  );
};
export default Card;
