import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const StatementItem = ({
  text,
  answer,
  addPoint,
  addAnsweredStatement,
  gameOver,
}) => {
  const [answerColor, setAnswerColor] = useState(null);

  let gridItemText;
  if (answerColor === true && gameOver === true) {
    gridItemText = null;
  } else if (answerColor === true) {
    gridItemText = 'Dobře! Rozšířil si královu řísi.';
  } else if (answerColor === false) {
    gridItemText = 'Škoda! Toto území jsi nedobyl.';
  } else {
    gridItemText = text;
  }

  let gridItemClass;
  if (answerColor === true && gameOver === true) {
    gridItemClass = 'grid__item--animated';
  } else if (answerColor === true) {
    gridItemClass = 'grid__item--true';
  } else if (answerColor === false) {
    gridItemClass = 'grid__item--false';
  } else {
    gridItemClass = 'grid__item';
  }
  return (
    <div className={gridItemClass}>
      {gridItemText}
      <div className="grid__options">
        <button
          className="grid__button"
          onClick={() => {
            if (answer === true) {
              setAnswerColor(true);
              addPoint(1);
              addAnsweredStatement(1);
            } else {
              setAnswerColor(false);
              addAnsweredStatement(1);
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
              addPoint(1);
              addAnsweredStatement(1);
            } else {
              setAnswerColor(false);
              addAnsweredStatement(1);
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
  addPoint: PropTypes.func,
  addAnsweredStatement: PropTypes.func,
};

export default StatementItem;
