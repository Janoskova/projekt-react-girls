import React from 'react';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import ItemTypes from '../utils/items';

const OrderingCard = ({
  event,
  year,
  setItems,
  name,
  index,
  moveCardHandler,
}) => {
  const changeItemBox = (currentItem, boxName) => {
    setItems((prevState) => {
      return prevState.map((e) => {
        return {
          ...e,
          box: e.name === currentItem.name ? boxName : e.box,
        };
      });
    });
  };

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
    item: { index, name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult && dropResult.name === 'Box 1') {
        changeItemBox(item, 'Box 1');
      } else {
        changeItemBox(item, 'Box 2');
      }
    },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
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
