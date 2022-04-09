import React from 'react';
import { useDrop } from 'react-dnd';

const OrderingBox = ({ children }) => {
  const [, drop] = useDrop({
    accept: 'card',
  });

  return (
    <section ref={drop} className="ordering__scale">
      {children}
    </section>
  );
};
export default OrderingBox;
