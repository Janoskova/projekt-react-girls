import React from 'react';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import ItemTypes from '../utils/items';
import PropTypes from 'prop-types';

const OrderingCard = ({
  event,
  year,
  order,
  index,
  moveCardHandler,
  check,
}) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: 'card',
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCardHandler(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { index },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  drag(drop(ref));

  const opacity = isDragging ? 0.5 : 1;

  let cardClass;
  if (check === true) {
    if (index === order) {
      cardClass = 'ordering__card ordering__card--right';
    } else {
      cardClass = 'ordering__card ordering__card--wrong';
    }
  } else {
    cardClass = 'ordering__card';
  }

  return (
    <div ref={ref} className={cardClass} style={{ opacity }}>
      <span>{event}</span>
      {check ? <span className="ordering__year">{year}</span> : null}
    </div>
  );
};

OrderingCard.propTypes = {
  event: PropTypes.string,
  year: PropTypes.string,
  order: PropTypes.number,
  index: PropTypes.number,
  moveCardHandler: PropTypes.func,
  check: PropTypes.bool,
};

export default OrderingCard;
