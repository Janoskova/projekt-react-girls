import React from 'react';
import { useDrag } from 'react-dnd';
import ItemTypes from '../utils/items';

const MapCard = ({ text, answer }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { answer: answer },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));
  return (
    <span
      ref={drag}
      className={isDragging ? 'card__item card__item--light' : 'card__item'}
    >
      {text}
    </span>
  );
};

export default MapCard;
