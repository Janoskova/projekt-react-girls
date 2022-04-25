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

  let result;
  if (rightAnswerPoints === 25) {
    result = 'Zapíšeš se do dějin! Celý svět ti leží u nohou.';
  } else if (rightAnswerPoints >= 20) {
    result = 'Skvělá práce. Král tě povýší do šlechtického stavu.';
  } else if (rightAnswerPoints >= 15) {
    result = 'Skvělá práce. Dobyl si více než polovinu světa.';
  } else if (rightAnswerPoints >= 10) {
    result = 'Zaber. Máš na to, aby sis podmanil více území.';
  } else if (rightAnswerPoints >= 5) {
    result = 'Tvoje výprava byla neúspěšná. Budeš se zodpovídat před králem.';
  } else {
    result = 'Král tě za tvé výsledky popraví.';
  }

  return (
    <main className="statement">
      <h1>Dobývání území</h1>
      <p className="statement__instruction">
        Urči, zda se jedná o pravdivé tvrzení.
      </p>
      <p className="statement__result">
        {statement.length === totalOfAnsweredStatements ? result : null}
      </p>
      <div className="statement__map">
        <div className="grid__container">
          {statement.map((item) => (
            <StatementItem
              key={item.id}
              text={item.text}
              answer={item.answer}
              addPoint={countRightAnswerPoint}
              addAnsweredStatement={countTotalOfAnsweredStatements}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Statement;
