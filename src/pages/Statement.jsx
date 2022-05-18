import React from 'react';
import { useState } from 'react';
import { statement } from '../data';
import StatementItem from '../components/StatementItem';

const Statement = () => {
  const [rightAnswerPoints, setRightAnswerPoints] = useState(0);
  const [totalOfAnsweredStatements, setTotalOfAnsweredStatements] = useState(0);

  const countRightAnswerPoint = (addPoint) => {
    setRightAnswerPoints(rightAnswerPoints + addPoint);
  };

  const countTotalOfAnsweredStatements = (addAnsweredStatement) => {
    setTotalOfAnsweredStatements(
      totalOfAnsweredStatements + addAnsweredStatement,
    );
  };

  let fullPoints;
  if (totalOfAnsweredStatements === statement.length) {
    fullPoints = true;
  }

  const callEvaluation = (points) => {
    if (points === 25) return 'Zapíšeš se do dějin! Celý svět ti leží u nohou.';
    if (points >= 20)
      return 'Skvělá práce. Zapsal ses do dějin. Králova odměna tě nemine.';
    if (points >= 15)
      return 'Skvělá práce. Dobyl si více než polovinu světa. Král tě povýší do šlechtického stavu.';
    if (points >= 10) return 'Zaber. Máš na to, aby si králi dobyl více území.';
    if (points >= 5)
      return 'Tvoje výprava byla neúspěšná. Budeš se zodpovídat před králem.';
    return 'Zkus to znova. Za tento výsledek by tě král nechal popravit.';
  };

  const result = callEvaluation(rightAnswerPoints);

  return (
    <main className="statement">
      <h1>Dobývání území</h1>
      <p className="statement__instruction">
        Urči, zda se jedná o pravdivé tvrzení.
      </p>
      <p className="statement__result">
        {fullPoints ? `Počet získaných bodů: ${rightAnswerPoints}/25.` : null}
      </p>
      <p className="statement__result">{fullPoints ? result : null}</p>
      <section className="statement__map">
        <div className="grid__container">
          {statement.map((item) => (
            <StatementItem
              key={item.id}
              text={item.text}
              answer={item.answer}
              addPoint={countRightAnswerPoint}
              addAnsweredStatement={countTotalOfAnsweredStatements}
              gameOver={fullPoints}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Statement;
