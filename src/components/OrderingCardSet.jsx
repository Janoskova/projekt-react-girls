import React from 'react';
import { useDrag } from 'react-dnd';
import ItemTypes from '../utils/items';

const OrderingCard = ({ data }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.EVENT,
    item: { order: data.order },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));
  return (
    <>
      {data.map((item) => (
        <div
          ref={drag}
          className={
            isDragging
              ? 'ordering__card ordering__card--light'
              : 'ordering__card'
          }
          key={item.order}
        >
          <span className="ordering__event">{item.event}</span>
          <span className="ordering__year">{item.year}</span>
        </div>
      ))}
    </>
  );
};

export default OrderingCard;
