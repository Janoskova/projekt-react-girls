import React from 'react';
import { statement } from '../data';
import StatementItem from '../components/StatementItem';

const Statement = () => {
  return (
    <main className="statement">
      <h1>Dobývání území</h1>
      <p className="statement__instruction">
        Urči, zda se jedná o pravdivé tvrzení.
      </p>
      <div className="statement__map">
        <div className="grid__container">
          {statement.map((item) => (
            <StatementItem
              key={item.id}
              text={item.text}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Statement;
