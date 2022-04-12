import React from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

const PathSA = ({ result }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: (item) => showAnswer(item.answer),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const showAnswer = (answer) => {
    answer === 'SA' ? result(true) : result(false);
  };

  let fill = '#68afad';
  if (isOver) {
    fill = '#262c2c';
  }
  return (
    <g id="SA" ref={drop} fill={fill} className="southAmerica">
      <path
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1"
        d="M295.16 316.59c-.57 0-1.86.91-3.57 2.72-1.45 1.55-3.34 2.5-4.21 2.16-1.47-.56-2.02.34-4.6 7.62-.44 1.25-1.24.97-3.47-1.12-2.61-2.46-3.32-2.58-7.5-1.47-3.26.87-4.3 1.04-5.78-.31l-2.06 2.65c.21.05.41.08.62.1 1.65.13 3.59.74 4.32 1.34.88.74 1.75.37 2.68-1.12 3.11-4.97 8.37 2.48 8.19 11.59-.08 4.06-.91 6.18-3.9 9.84-2.11 2.57-4.48 7.19-5.26 10.29-1.27 5.08-1.22 5.76.66 6.81 1.97 1.1 1.93 1.26-.37 3.03l-2.41 1.87 3.81 8.69c2.12 4.77 5.11 12.55 6.63 17.28 2.33 7.28 3.43 9.05 7.15 11.56 2.42 1.64 6.27 4.65 8.57 6.72l4.15 3.78-1.43 19.94c-.79 10.97-1.55 22.82-1.72 26.32-.21 4.15-1.4 8.54-3.47 12.62-2.29 4.51-3 7.21-2.5 9.72.38 1.91.07 5.21-.69 7.31-1.08 2.99-1.08 4.39.03 6.47 1.7 3.18 1.2 15.39-.72 17.31-1 1-1.51.84-2.09-.69-.62-1.6-1.01-1.72-1.78-.5-1.25 1.98-1.28 3.6-.06 2.85 1.32-.82 7.43 5.95 6.59 7.31-.38.62-1.36.86-2.22.53-1.22-.46-1.48.65-1.19 4.94.21 3.05-.25 6.26-.97 7.13-1 1.21-.91 1.49.38 1.21 2.47-.52 8.26 3.71 7.56 5.53-1.08 2.83 1.21 1.62 2.56-1.34.73-1.59 1.85-2.87 2.5-2.87s1.19-1.23 1.19-2.72 1.04-3.66 2.31-4.81c1.28-1.16 2.09-2.38 1.79-2.69-.31-.31 1.05-2.38 3.03-4.63 3.49-3.98 3.51-4.09 1.15-4.97-4.66-1.72-4.22-10.28.53-10.28 1.01 0 1.6-1.29 1.6-3.56 0-2.62.63-3.77 2.34-4.22 1.98-.52 2.08-.8.66-1.91-.93-.71-1.86-2.35-2.07-3.62-.29-1.86.28-2.31 2.97-2.31 3.21 0 4.48-1.18 5.79-5.44.42-1.37 2.45-2.2 6.56-2.75 9.45-1.25 11.69-5.43 6.34-11.78-3.48-4.13-2.72-5.36 1.72-2.81 3.05 1.75 3.57 1.74 7.28-.03 4.03-1.92 6.92-5.89 13.03-18.07 2.48-4.93 2.85-6.71 1.91-8.78-.65-1.43-.84-3.18-.41-3.87.86-1.39 9.11-7.19 10.22-7.19.38 0 1.26-.79 1.97-1.72s3.36-1.88 5.88-2.13c4.39-.43 4.64-.72 7.71-7.84 2.61-6.04 3.22-9.14 3.25-16.87.03-6.67.51-9.79 1.6-10.44.85-.51 3.45-3.75 5.78-7.16 5.58-8.18 5.89-14.26.84-16.87-1.87-.97-4.07-2.72-4.9-3.91-1.12-1.59-3.41-2.31-8.63-2.69-6.08-.44-7.64-1.04-10.81-4.22-4.47-4.46-6.48-4.6-9.53-.71-1.65 2.09-3.22 2.84-5.38 2.59-3.67-.43-3.63-2.41.07-3.28 1.46-.35 2.82-1.51 3.03-2.6.56-2.92-1.53-2.43-5.94 1.44-2.16 1.9-4.24 3.14-4.63 2.75-1.21-1.22 6.21-10.93 7.69-10.06.76.44.34-.39-.94-1.84-1.27-1.45-2.19-2.94-2.06-3.35 1.36-4.25-6.18-10.59-12.59-10.59-3.19 0-5-.95-8.32-4.35-2.33-2.38-5.51-5.57-7.09-7.09s-2.52-3.29-2.12-3.94c.47-.77-1.32-.92-5.19-.4-3.69.49-6.12.32-6.6-.44-.41-.67-1.34-1.12-2.09-1-2.31.37-7.73-2.32-7.81-3.87-.04-.82-.55-.31-1.13 1.12-.57 1.43-1.52 2.59-2.12 2.59s-.85.99-.53 2.19c.82 3.15-1.59 4.12-3.13 1.25-1.01-1.9-.88-3.01.57-5.22 1.18-1.81 1.34-2.72.78-2.72z"
      ></path>
      <path d="M75.572 416.45c-.166.02-.356.08-.507.18-.602.37-.77 1.16-.397 1.77.372.6 1.169.77 1.771.4.603-.38.771-1.17.398-1.78a1.228 1.228 0 00-1.265-.57z"></path>
      <path d="M79.042 418.76c-.165.02-.355.09-.506.18-.602.37-.77 1.17-.397 1.77.372.6 1.168.77 1.771.4s.77-1.17.398-1.77a1.236 1.236 0 00-1.266-.58z"></path>
      <path d="M111.44 426.86c-.17.02-.36.09-.51.18-.6.37-.77 1.17-.4 1.77.38.6 1.17.77 1.77.4.61-.37.78-1.17.4-1.77-.28-.46-.77-.66-1.26-.58z"></path>
      <path d="M99.868 429.17c-.166.03-.356.09-.507.18-.602.37-.77 1.17-.397 1.77.372.61 1.166.77 1.776.4.6-.37.77-1.17.39-1.77-.28-.45-.77-.65-1.262-.58z"></path>
      <path d="M118.38 433.8c-.17.02-.36.09-.51.18-.6.37-.77 1.17-.39 1.77.37.6 1.16.77 1.77.4.6-.37.77-1.17.39-1.77-.28-.45-.76-.66-1.26-.58z"></path>
      <path d="M134.58 438.43c-.17.02-.36.08-.51.18-.6.37-.77 1.17-.4 1.77s1.17.77 1.77.4c.61-.38.77-1.17.4-1.77-.28-.46-.77-.66-1.26-.58z"></path>
      <path d="M144.99 440.74c-.17.03-.36.09-.51.18-.6.37-.77 1.17-.39 1.77.37.61 1.16.77 1.77.4.6-.37.77-1.17.39-1.77-.28-.45-.76-.65-1.26-.58z"></path>
    </g>
  );
};

PathSA.propTypes = {
  result: PropTypes.func,
};

export default PathSA;
