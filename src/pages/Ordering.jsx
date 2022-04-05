import React from 'react';
import WaveIcon from '../components/WaveIcon';
import OrderingCard from '../components/OrderingCard';
import { events } from '../data';

const Ordering = () => {
  const cardSet = events[0];

  return (
    <main className="ordering">
      <h1 className="ordering__heading">Chronologické řazení</h1>
      <p className="ordering__instruction">
        Seřaďte události tak, aby nejstarší byla nahoře.
      </p>
      <section className="ordering__scale">
        <p className="ordering__scaleText">Kartičky přesuňte sem</p>
      </section>
      <section className="ordering__cards">
        {cardSet.cards.map((item) => {
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
