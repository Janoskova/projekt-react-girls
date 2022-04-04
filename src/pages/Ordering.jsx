import React from 'react';
import WaveIcon from '../components/WaveIcon';

const Ordering = () => {
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
        <div className="ordering__card">
          <span className="ordering__event">
            Objevení Ameriky K. Kolumbusem
          </span>
          <span className="ordering__year">1492</span>
        </div>
        <div className="ordering__card">
          <span className="ordering__event">
            Obeplutí mysu Dobré naděje B. Diasem
          </span>
          <span className="ordering__year">1488</span>
        </div>
        <div className="ordering__card">
          <span className="ordering__event">
            Doplutí Vikingů do Sev. Ameriky
          </span>
          <span className="ordering__year">kolem r. 1000</span>
        </div>
        <div className="ordering__card">
          <span className="ordering__event">Tordesillaská smlouva</span>
          <span className="ordering__year">1494</span>
        </div>
      </section>
      <WaveIcon />
    </main>
  );
};

export default Ordering;
