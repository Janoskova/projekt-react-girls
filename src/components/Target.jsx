import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Target = ({
  addPoint,
  coin,
  sailingAnimation,
  animationDelay,
  answer,
  word,
}) => {
  const [targetDisabled, setTargetDisabled] = useState(false);

  const handleClick = () => {
    if (answer === true) {
      addPoint(1);
      coin(true);
      setTargetDisabled(true);
    } else {
      console.log('wrong answer');
    }
  };

  return (
    <div
      className={targetDisabled ? 'target target--disabled' : 'target'}
      style={
        sailingAnimation
          ? { animation: `sail 10s ${animationDelay} linear both` }
          : { animation: '' }
      }
      onClick={handleClick}
    >
      <span className="target__word">{word}</span>
      <div className="target__caravel"></div>
    </div>
  );
};

Target.propTypes = {
  check: PropTypes.func,
  coin: PropTypes.func,
  sailingAnimation: PropTypes.bool,
  animationDelay: PropTypes.string,
  answer: PropTypes.bool,
  word: PropTypes.string,
};

export default Target;
