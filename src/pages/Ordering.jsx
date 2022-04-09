import React from 'react';
import { useState } from 'react';
import { events } from '../data';
import ShuffleArray from '../utils/ShuffleArray';
import OrderingCard from '../components/OrderingCard';
import OrderingBox from '../components/OrderingBox';
import WaveIcon from '../components/WaveIcon';

const Ordering = () => {
  let cardIndex = 0;
  const [shuffledCardSets] = useState(ShuffleArray(events));
  const [items, setItems] = useState(shuffledCardSets[cardIndex]);
  const [check, setCheck] = useState(false);

  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];

    if (dragItem) {
      setItems((prevState) => {
        const coppiedStateArray = [...prevState];

        // remove item by "hoverIndex" and put "dragItem" instead
        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

        // remove item by "dragIndex" and put "prevItem" instead
        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

        console.log(coppiedStateArray);
        return coppiedStateArray;
      });
    }
  };

  const handleClick = () => {
    setItems(shuffledCardSets[cardIndex + 1]);
    console.log(cardIndex);
    setCheck(false);
  };

  return (
    <main className="ordering">
      <h1 className="ordering__heading">Chronologické řazení</h1>
      <p className="ordering__instruction">
        Seřaďte události tak, aby nejstarší byla nahoře.
      </p>
      <OrderingBox>
        {items.map((item, index) => (
          <OrderingCard
            key={item.order}
            event={item.event}
            year={item.year}
            order={item.order}
            index={index}
            moveCardHandler={moveCardHandler}
            check={check}
          />
        ))}
      </OrderingBox>
      <nav className="ordering__navigation">
        <button onClick={() => setCheck(true)} className="ordering__button">
          Zkontrolovat
        </button>
        {check ? (
          <button onClick={handleClick} className="ordering__button">
            Další
          </button>
        ) : null}
      </nav>
      <WaveIcon />
    </main>
  );
};

export default Ordering;
