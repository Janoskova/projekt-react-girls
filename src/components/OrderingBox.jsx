import React from 'react';
import { useDrop } from 'react-dnd';

const OrderingBox = ({ children, className, title }) => {
  const [, drop] = useDrop({
    accept: 'card',
    drop: () => ({ name: title }),
  });

  return (
    <section ref={drop} className={className}>
      {children}
    </section>
  );
};
export default OrderingBox;
