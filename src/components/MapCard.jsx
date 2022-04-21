import React from 'react';
import { useDrag } from 'react-dnd';
import ItemTypes from '../utils/items';
import PropTypes from 'prop-types';

const MapCard = ({ text, answer }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { answer: answer },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));
  return (
    <span
      ref={drag}
      className={isDragging ? 'card__item card__item--wider' : 'card__item'}
    >
      {text}
    </span>
  );
};

MapCard.propTypes = {
  text: PropTypes.string,
  answer: PropTypes.string,
};

export default MapCard;
