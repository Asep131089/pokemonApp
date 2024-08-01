// HeaderCard.js
import React from 'react';

const HeaderCard = ({ title, description }) => {
  return (
    <div className="header-card">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default HeaderCard;
