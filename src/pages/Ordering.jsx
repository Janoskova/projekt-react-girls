import React from 'react';
import { useState } from 'react';
import { events } from '../data';
import OrderingCard from '../components/OrderingCard';
import OrderingBox from '../components/OrderingBox';
import WaveIcon from '../components/WaveIcon';

const Ordering = () => {
  const cardSet = events[0].cards;
  const [items, setItems] = useState(cardSet);

  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];

    if (dragItem) {
      setItems((prevState) => {
        const coppiedStateArray = [...prevState];

        // remove item by "hoverIndex" and put "dragItem" instead
        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

        // remove item by "dragIndex" and put "prevItem" instead
        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

        return coppiedStateArray;
      });
    }
  };

  const returnItemsForBox = (boxName) => {
    return items
      .filter((item) => item.box === boxName)
      .map((item, index) => (
        <OrderingCard
          key={item.order}
          event={item.event}
          year={item.year}
          name={item.name}
          setItems={setItems}
          index={index}
          moveCardHandler={moveCardHandler}
        />
      ));
  };

  return (
    <main className="ordering">
      <h1 className="ordering__heading">Chronologické řazení</h1>
      <p className="ordering__instruction">
        Seřaďte události tak, aby nejstarší byla nahoře.
      </p>
      <OrderingBox title="Box 2" className="ordering__scale">
        <p className="ordering__scaleText">Kartičky přesuňte sem</p>
        {returnItemsForBox('Box 2')}
      </OrderingBox>
      <OrderingBox title="Box 1" className="ordering__cards">
        {returnItemsForBox('Box 1')}
      </OrderingBox>
      <WaveIcon />
    </main>
  );
};

export default Ordering;
