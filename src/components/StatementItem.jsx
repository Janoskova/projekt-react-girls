import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const StatementItem = ({ text, answer }) => {
  const [answerColor, setAnswerColor] = useState(null);

  let gridItemClass;
  if (answerColor === true) {
    gridItemClass = 'grid__item--true';
  } else if (answerColor === false) {
    gridItemClass = 'grid__item--false';
  } else {
    gridItemClass = 'grid__item';
  }
  return (
    <div className={gridItemClass}>
      {text}
      <div className="grid__options">
        <button
          className="grid__button"
          onClick={() => {
            if (answer === true) {
              setAnswerColor(true);
            } else {
              setAnswerColor(false);
            }
          }}
        >
          ano
        </button>
        <button
          className="grid__button"
          onClick={() => {
            if (answer === false) {
              setAnswerColor(true);
            } else {
              setAnswerColor(false);
            }
          }}
        >
          ne
        </button>
      </div>
    </div>
  );
};

StatementItem.propTypes = {
  text: PropTypes.string,
  answer: PropTypes.bool,
};

export default StatementItem;
