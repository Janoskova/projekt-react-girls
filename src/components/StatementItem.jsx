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

  const showGridItemText = () => {
    if (answerColor === true && gameOver === true) return null;
    if (answerColor === true) return 'Dobře! Rozšířil si královu řísi.';
    if (answerColor === false) return 'Škoda! Toto území jsi nedobyl.';
    return text;
  };
  const gridItemText = showGridItemText();

  const provideGridItemClass = () => {
    if (answerColor === true && gameOver === true)
      return 'grid__item--animated';
    if (answerColor === true) return 'grid__item--true';
    if (answerColor === false) return 'grid__item--false';
    return 'grid__item';
  };
  const gridItemClass = provideGridItemClass();

  const processCorrectAnswer = () => {
    setAnswerColor(true);
    addPoint(1);
    addAnsweredStatement(1);
  };

  const processWrongAnswer = () => {
    setAnswerColor(false);
    addAnsweredStatement(1);
  };

  return (
    <div className={gridItemClass}>
      {gridItemText}
      <div className="grid__options">
        <button
          className="grid__button"
          onClick={() => {
            if (answer === true) {
              processCorrectAnswer();
            } else {
              processWrongAnswer();
            }
          }}
        >
          ano
        </button>
        <button
          className="grid__button"
          onClick={() => {
            if (answer === false) {
              processCorrectAnswer();
            } else {
              processWrongAnswer();
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
  gameOver: PropTypes.bool,
};

export default StatementItem;
