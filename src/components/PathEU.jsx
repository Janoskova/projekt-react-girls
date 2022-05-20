import React from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

const PathEU = ({ result, text, showRedCircle, placeOnMap }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: (item) => showAnswer(item.answer),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const showAnswer = (answer) => {
    if (answer === 'EU') {
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
    <g id="EU" ref={drop} fill={fill} className="europe">
      <path
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1"
        d="M569.94 86.094c-1.32.042-2.65.875-3.94 3.468-6.63-.442-9.98 4.305-17.84 6.25-2.33 8.618-13.27 12.848-19.13 18.688 8.43 12.23-21.87 7.89-12.19 26.69 4.39 9.75 17.85-11.48 17.66 9.28 5.55 14.74 22.58-9.07 14.47-16.75 2.19-8.96 12.5-23.81 21.37-21.44-4.06 6.5-18.86 31.13 2.47 22.94 18.48-1.47 5.78 7.39-5.25 6 2.64 9.59-.04 9.53-7.03 10.4-1.39 13.17-27.61 17.17-33.5 6.41-1.54-16.26 1.36 14.53-10.87 9.59-7.34 6.76-17.68 17.15-28.32 18.47 8.63 4.98 12.69 27.89-6.25 20-18.66.11-5.55 37.45 11.91 22.22 7.45-11.29 23.24-35.23 37.72-18.75 10.02 1.73 16.37 26.09 16.53 7.94 5.51 5.2-26.81-25.95-7.44-18.03 10.59 6.11 21.56 31.32 23.78 24.53-1 4.61-5.23 9.77 3.79 2.03-12.57-13.44 18.36-5.52 12.5-22.62 5.97-14 12.26-7.86 18.87-3.16-4.44-4.6 1.84-8.04 5.97-7.66l3.78-27.84 4.19-30.87 2.84-21c-3.91 2.56-8 4.39-11.78 2.59 7.85 16.22-25.13-17.881-2.66-6.94 29.64 2.68-4.42-19.971-16.62-15.686-2.99-3.215 2.49-4.832-7.22-6.188-2.1 3.031-4.92-.655-7.81-.562z"
      ></path>
      {text === 'Španělsko' && placeOnMap === true ? (
        <ellipse
          ry="10.3896"
          rx="10.06493"
          id="svg_1"
          cy="221.81779"
          cx="485.81221"
          stroke="#000"
          fill="#ff0000"
        />
      ) : null}
    </g>
  );
};

PathEU.propTypes = {
  result: PropTypes.func,
  text: PropTypes.string,
  showRedCircle: PropTypes.func,
  placeOnMap: PropTypes.bool,
};

export default PathEU;
