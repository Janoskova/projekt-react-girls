import React from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

const PathAF = ({ result, text, showRedCircle, placeOnMap }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: (item) => showAnswer(item.answer),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const showAnswer = (answer) => {
    if (answer === 'AF') {
      result(true);
      showRedCircle(true);
    } else {
      result(false);
      showRedCircle(false);
    }
  };

  let fill = '#68afad';
  if (isOver) {
    fill = '#262c2c';
  }
  return (
    <g id="AF" ref={drop} fill={fill} className="africa">
      <path
        stroke="#000"
        d="M589.34 252.31c-10.41.01-24.92-10.72-30.75-4.87-8.59 8.64-15.82.2-24.31-1.53-11.01-2.26.93-18.9-15.53-14.94-10.12 2.43-20.82 7.75-30.43 6.62-8.4-.99-11.32 2.75-14.78 8.46-4.18 6.89-5.95 15.44-12.54 22.03-7.18 7.18-9.44 15.89-8.78 26.72.61 9.89-2.92 17.43 4.58 25.98 6.63 7.57 9.3 22.07 22.42 21.62 10.75-.36 23.74-8.64 31.6-4 5.64 3.33 10.91 1.58 13.83 5.72 5.26 7.45-1.35 20.18 6.15 29.25 5.97 7.22 10.16 19.21 4.75 28.82-6.15 10.93 1.46 20.99 2.79 31.76 1.53 12.33 12.69 23.46 12.05 34.21-.6 10.18 10.27 7.82 17.13 6.7 11.95-1.94 20.15-12.67 22.89-23.25 2.44-9.42 5.51-16.24 6.38-26.54.75-8.98 21.26-14.72 15.94-28.77-3.95-10.41-6.05-22.07 2.25-31.7 7.72-8.95 17.59-15.96 22.33-27.44 2.16-5.25 8.72-17.97 7.42-17.94-6.4.1-20.77 6.87-25.37-3.97-4.47-10.55-15.19-17.51-15.91-29.71-.58-9.77-13.46-20.12-11.89-26.81.61-2.6 2.89 1.21.71-3.32-.51-1.06-.75-.63-1.48-1.41-.73-.77 6.64-1.69-1.45-1.69z"
      ></path>
      {text === 'mys Dobré naděje' && placeOnMap === true ? (
        <ellipse
          ry="10.3896"
          rx="10.06493"
          id="svg_1"
          cy="475.06431"
          cx="557.89008"
          stroke="#000"
          fill="#eb5e55"
        />
      ) : null}
      {text === 'Ceuta' && placeOnMap === true ? (
        <ellipse
          ry="10.3896"
          rx="10.06493"
          id="svg_1"
          cy="243.89567"
          cx="489.05897"
          stroke="#000"
          fill="#eb5e55"
        />
      ) : null}
    </g>
  );
};

PathAF.propTypes = {
  result: PropTypes.func,
  text: PropTypes.string,
  showRedCircle: PropTypes.func,
  placeOnMap: PropTypes.bool,
};

export default PathAF;
