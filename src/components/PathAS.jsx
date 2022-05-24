import React from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

const PathAS = ({ result, text, showRedCircle, placeOnMap }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: (item) => showAnswer(item.answer),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const showAnswer = (answer) => {
    if (answer === 'AS') {
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
    <g id="AS" ref={drop} fill={fill} className="asia">
      <path
        stroke="#000"
        d="M793.47 50.969c-6.04 15.433-27.02 9.164-43 13.652-13.9.738 2.09 14.553-15.25 8.41-19.47-4.728 10.98 20.727-3.25 13.031-1.97-8.12-24.53-8.869-10.84.449-8.21-2.126-14.01-15.148-12.71 1.441-.39 5.485 22.62 14.658 11.29 16.868-5.45-22.038-18.99 17.84-24.97.22 15.41 9.2 13.27-39.605.42-25.821-13.95 5.381 10.18 26.151-9.52 15.772-9.45-5.353-19.25 6.219-20.92 1.165-12.06 5.264-22.67 1.265-34.94 10.534 2.75-5.15-9.31-13.414-4.38-.2-6.02 3.13-14.12 12.34-21.15 8.99 7.85 16.22-25.13-17.889-2.65-6.95 29.63 2.68-4.42-19.957-16.63-15.672-2.99-3.215 2.47-4.832-7.23-6.188-3.06 4.409-7.62-5.409-11.75 2.892-6.63-.443-9.97 4.305-17.83 6.25-2.33 8.618-13.28 12.838-19.14 18.678 8.43 12.24-21.86 7.9-12.18 26.7 4.39 9.75 17.85-11.48 17.66 9.28 5.55 14.74 22.58-9.08 14.47-16.76 2.19-8.96 12.5-23.8 21.37-21.43-4.06 6.5-18.85 31.12 2.49 22.93 18.47-1.47 5.77 7.39-5.26 5.99 2.64 9.59-.06 9.54-7.04 10.42-1.4 13.16-27.61 17.17-33.5 6.41-1.54-16.26 1.36 14.53-10.87 9.59-7.34 6.76-17.66 17.15-28.3 18.47 8.63 4.98 12.67 27.88-6.27 20-18.66.1-5.56 37.44 11.9 22.21 7.45-11.3 23.24-35.23 37.72-18.74 10.02 1.73 16.38 26.1 16.54 7.95 5.51 5.21-26.81-25.96-7.44-18.04 10.59 6.11 21.56 31.32 23.78 24.53-1 4.61-5.23 9.77 3.79 2.02-12.56-13.44 18.36-5.5 12.5-22.6 5.97-14 12.25-7.87 18.86-3.17-7.53-7.8 15.8-12.26 7.13-.4 14.35 5.64 11.33 21.89-5.03 13.31-11.18-5.91-37.97 8.79-19.06 18.25 14.03-3.22 24.73.24 14.99 16.3-8.29 9.99-46.53 8.7-40.56 26.85 18.07 5.96 33.62-22.08 42.67-13.62 7.95 17.56 18.93 32.42 23.3 51.91 16.5-2.53 37.71-13.33 45.25-30.02-7.95-5.65-8.56-18.32-17.13-6.25-12.53 4.85-22.15-37.62-4.53-14.54 14.11 11.4 42.09 5.47 50.79 20.46-1.34 10 10.28-7.93 7.44 6.56.4 11.55 7.67 37.36 15.27 39.2 1.93-20.41 15.03-39.35 34.67-46.01 12.55 1.73 7.9 27.65 20.5 19.97.52 21.43 5.88 14.49 16.4 16.25 1.15 15.52 17.36 5.99 15.94-4.2-2.95-11.13-16.41-31.53 2.97-28.43 13.06-2.81 36.68-17.25 29.74-30.97 7.06-4.35-11.79-20.41 6.11-25.82.27.55-25.12-1.52-8.7-10.24 13.6-10.54-.42 12.23 10.42.6 10.71-1.74 8.57 30.79 16.5 12.4-9.85-9.84 2.14-25.67 12.51-24.58 13.28-4.86 34.06-45.19 10.65-43.12-12.19-10.87 19.36-28.74 31.97-23.92 14.18 3.84 18.58-3.58 30.02-10.91 8.87-.17-2.24 11.8 10.38 1.63 12.67-12.25-8.12 14.61-15.16 16.65-9.19 6.32-5.87 38.73 5.74 19.31 3-9.32 12.54-12.11 7.41-23.14 9.3-14.83 28.43-4.7 41.51-16.83 18.05 2.69-14.27-18.25 7.75-11.44 2.5-17.919 20.9 13.17 24.9-3.08 13-7.52-10.3-4.5-9.3-6.47-10.8-15.764-39.54-16.63-46.48-10.191-18.92-.358-29.59-10.932-47.88-9.875-5.46-5.809-11.21-6.574-18.42-3.608 5.47-7.577-17.93-5.427-16.39 2.264-11.98-2.069-32.71 7.747-31.56-7.5-1.75-8.939-23.24 2.681-32.19-4.664-8.88 7.028-13.51-11.081-17.62-3.524 15.65 6.864-6.07-2.768-.6 5.282-23.11 7.845-2.5-8.314 7.83-10.464 3.53-12.746-27.47-.845-24.27-12.505l-1.65-.156zm-146.72 142.25c5.97 4.76-11.58 9.07.28 17.28.74 5.85 9.49 1.03 1.58 7.55 13.82 18.33-20.3 14.01-8.33-2.99-7.24-8.3-8.78-22.16 6.47-21.84zm23.28 2.94c4.88 11.73-11.87 7.68 0 0z"
      ></path>
      {text === 'Indie' && placeOnMap === true ? (
        <ellipse
          stroke="#000"
          ry="29.54544"
          rx="30.84412"
          id="svg_1"
          cy="287.07746"
          cx="724.77303"
          fill="#eb5e55"
        />
      ) : null}
    </g>
  );
};

PathAS.propTypes = {
  result: PropTypes.func,
  text: PropTypes.string,
  showRedCircle: PropTypes.func,
  placeOnMap: PropTypes.bool,
};

export default PathAS;
