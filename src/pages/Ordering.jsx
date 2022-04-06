import React from 'react';
import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { events } from '../data';
import OrderingCard from '../components/OrderingCard';
import WaveIcon from '../components/WaveIcon';

const Ordering = () => {
  const cardSet = events[0];
  const [scale, setScale] = useState([]);
  const [cardContainer, setCardContainer] = useState(cardSet);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: (item) => addCardToScale(item.order),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addCardToScale = (order) => {
    const cardList = cardSet.cards.filter((card) => card.order === order);
    setScale((scale) => [...scale, cardList[0]]);
    const indexOfObject = cardContainer.cards.findIndex((object) => {
      return object.order === order;
    });
    cardContainer.cards.splice(indexOfObject, 1);
    setCardContainer(cardContainer);
  };

  return (
    <main className="ordering">
      <h1 className="ordering__heading">Chronologické řazení</h1>
      <p className="ordering__instruction">
        Seřaďte události tak, aby nejstarší byla nahoře.
      </p>
      <section
        ref={drop}
        className={
          isOver ? 'ordering__scale ordering__scale--active' : 'ordering__scale'
        }
      >
        <p className="ordering__scaleText">Kartičky přesuňte sem</p>
        {scale.map((item) => {
          return (
            <OrderingCard
              order={item.order}
              key={item.order}
              event={item.event}
              year={item.year}
            />
          );
        })}
      </section>
      <section className="ordering__cards">
        {cardContainer.cards.map((item) => {
          return (
            <OrderingCard
              order={item.order}
              key={item.order}
              event={item.event}
              year={item.year}
            />
          );
        })}
      </section>
      <WaveIcon />
    </main>
  );
};

export default Ordering;
