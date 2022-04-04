import React from 'react';
import WaveIcon from '../components/WaveIcon';
import OrderingCardSet from '../components/OrderingCardSet';
import { events } from '../data';

const Ordering = () => {
  const item = events[0];

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
        <OrderingCardSet data={item.options} />
      </section>
      <WaveIcon />
    </main>
  );
};

export default Ordering;
