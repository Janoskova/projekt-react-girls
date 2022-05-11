import React from 'react';
import { useState } from 'react';
import { targets } from '../data';
import AssessmentTreasure from '../components/AssessmentTreasure';
import Target from '../components/Target';
import ShuffleArray from '../utils/ShuffleArray';

const Shooting = () => {
  const [sailingAnimation, setSailingAnimation] = useState(false);
  const [coinAnimation, setCoinAnimation] = useState(false);
  const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(0);
  const [shuffledTargets] = useState(ShuffleArray(targets));
  const items = shuffledTargets[index];

  const countRightAnswerPoint = (addPoint) => {
    setPoints(points + addPoint);
  };

  const triggerCoinAnimation = (coin) => {
    setCoinAnimation(coin);
  };

  const nextGame = () => {
    setSailingAnimation(false);
    setIndex(index + 1);
  };

  const triggerAnimation = () => {
    setSailingAnimation(!sailingAnimation);
    setTimeout(nextGame, 17000);
  };

  if (index >= shuffledTargets.length) {
    return <AssessmentTreasure points={points} />;
  }
  return (
    <main className="shooting">
      <h1>Střílení</h1>
      <section className="shooting__introduction">
        <div className="shooting__score">
          <div
            className={coinAnimation ? 'shooting__coin' : ''}
            onAnimationEnd={() => setCoinAnimation(false)}
          ></div>
          <div className="shooting__treasure">
            <div className="shooting__points">{points}</div>
          </div>
        </div>
        <div className="shooting__text">
          <p className="shooting__instruction">
            Sestřeluj pouze slova, která patří do určité kategorie a sbírej
            zlaťáky.
          </p>
          <p className="shooting__instruction">
            Kategorie:{' '}
            <span className="shooting__category">{items[index].category}</span>
          </p>
          {index === 0 ? (
            <button
              className={
                sailingAnimation === true
                  ? 'shooting__play shooting__play--disabled'
                  : 'shooting__play'
              }
              onClick={triggerAnimation}
              disabled={sailingAnimation === true}
            >
              Začít hrát
            </button>
          ) : (
            <button
              className={
                sailingAnimation === true
                  ? 'shooting__play shooting__play--disabled'
                  : 'shooting__play'
              }
              onClick={triggerAnimation}
              disabled={sailingAnimation === true}
            >
              Pokračovat ve hře
            </button>
          )}
        </div>
      </section>
      <section className="shooting__field">
        {items.map((item) => (
          <Target
            key={item.word}
            animationDelay={item.animationDelay}
            sailingAnimation={sailingAnimation}
            word={item.word}
            answer={item.answer}
            addPoint={countRightAnswerPoint}
            coin={triggerCoinAnimation}
          />
        ))}
      </section>
    </main>
  );
};

export default Shooting;
