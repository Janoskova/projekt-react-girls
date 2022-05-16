import React from 'react';
import { useState } from 'react';
import { targets, lighthousesArray } from '../data';
import ShuffleArray from '../utils/ShuffleArray';
import AssessmentTreasure from '../components/AssessmentTreasure';
import Lighthouse from '../components/Lighthouse';
import ShootingTarget from '../components/ShootingTarget';
import ShootingButton from '../components/ShootingButton';

const Shooting = () => {
  const [sailingAnimation, setSailingAnimation] = useState(false);
  const [coinAnimation, setCoinAnimation] = useState(false);
  const [lighthouses, setLighthouses] = useState(lighthousesArray);
  const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(0);
  const [shuffledTargets] = useState(ShuffleArray(targets));
  const items = shuffledTargets[index];

  const deleteLighthouse = (newLighthouses) => {
    return setLighthouses(newLighthouses);
  };

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

  const newGame = () => {
    setIndex(0);
    setPoints(0);
    setLighthouses(lighthousesArray);
  };

  if (index >= shuffledTargets.length) {
    return <AssessmentTreasure points={points} />;
  }
  return (
    <main className="shooting">
      <section className="shooting__introduction">
        <h1 className="shooting__heading">Střílení</h1>
        <div className="shooting__score">
          <div className="shooting__treasure">
            <div
              className={coinAnimation ? 'shooting__coin' : ''}
              onAnimationEnd={() => setCoinAnimation(false)}
            ></div>
            <div className="shooting__points">{points}</div>
          </div>
        </div>
        <div className="shooting__text">
          <p className="shooting__instruction">
            Sestřeluj pouze slova, která patří do určité kategorie a sbírej
            zlaťáky. Za chybně sestřelené slovo, přijdeš o maják střežící tvůj
            život.
          </p>
          <p className="shooting__instruction">
            Kategorie:{' '}
            <span className="shooting__category">{items[index].category}</span>
          </p>
        </div>
        <div className="shooting__lighthouses">
          {lighthouses.map((item) => (
            <Lighthouse key={item.id} />
          ))}
        </div>
        <ShootingButton
          sailingAnimation={sailingAnimation}
          lighthouses={lighthouses}
          index={index}
          triggerAnimation={triggerAnimation}
          newGame={newGame}
        />
      </section>
      {lighthouses.length === 0 ? (
        <section className="shooting__field--gameover">
          <h2 className="shooting__gameover">
            Tentokrát to nevyšlo. Zkus to znova!
          </h2>
        </section>
      ) : (
        <section className="shooting__field">
          {items.map((item) => (
            <ShootingTarget
              key={item.word}
              animationDelay={item.animationDelay}
              sailingAnimation={sailingAnimation}
              word={item.word}
              answer={item.answer}
              addPoint={countRightAnswerPoint}
              coin={triggerCoinAnimation}
              lighthouses={lighthouses}
              settingLighthouses={deleteLighthouse}
            />
          ))}
        </section>
      )}
    </main>
  );
};

export default Shooting;
