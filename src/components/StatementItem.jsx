import React from 'react';

const StatementItem = ({ text, answer }) => {
  return (
    <div className="grid__item">
      {text}
      <div className="grid__options">
        <button className="grid__button">ano</button>
        <button className="grid__button">ne</button>
      </div>
    </div>
  );
};

export default StatementItem;
