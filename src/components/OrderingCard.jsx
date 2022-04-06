import React from 'react';
import { useDrag } from 'react-dnd';
import ItemTypes from '../utils/items';

const OrderingCard = ({ order, event, year }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { order: order },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));
  return (
    <div
      ref={drag}
      className={
        isDragging ? 'ordering__card ordering__card--light' : 'ordering__card'
      }
    >
      <span className="ordering__event">{event}</span>
      <span className="ordering__year">{year}</span>
    </div>
  );
};

export default OrderingCard;
