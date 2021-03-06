import React from 'react';
import { useState, useRef, useEffect } from 'react';
import useSound from 'use-sound';
import coinSound from '../assets/records/coinSound.wav';
import errorSound from '../assets/records/errorSound.wav';
import nonoSound from '../assets/records/nonoSound.wav';
import { targets, lighthousesArray } from '../data';
import ShuffleArray from '../utils/ShuffleArray';
import AssessmentTreasure from '../components/AssessmentTreasure';
import Lighthouse from '../components/Lighthouse';
import ShootingGameover from '../components/ShootingGameover';
import ShootingTarget from '../components/ShootingTarget';
import ShootingButton from '../components/ShootingButton';

const Shooting = () => {
  const [sailingAnimation, setSailingAnimation] = useState(false);
  const [coinAnimation, setCoinAnimation] = useState(false);
  const [lighthouses, setLighthouses] = useState(lighthousesArray);
  const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(0);
  const timer = useRef();
  const [shuffledTargets] = useState(ShuffleArray(targets));
  const items = shuffledTargets[index];
  const [playCoinSound] = useSound(coinSound);
  const [playErrorSound] = useSound(errorSound);
  const [playNonoSound, { stop }] = useSound(nonoSound);

  useEffect(() => {
    return () => {
      stop();
    };
  }, [points, stop]);

  const deleteLighthouse = (newLighthouses) => {
    playErrorSound();
    return setLighthouses(newLighthouses);
  };

  const countRightAnswerPoint = (addPoint) => {
    setPoints(points + addPoint);
  };

  const triggerCoinAnimation = (coin) => {
    setCoinAnimation(coin);
    playCoinSound();
  };

  const nextGame = () => {
    setSailingAnimation(false);
    setIndex(index + 1);
  };

  const triggerAnimation = () => {
    setSailingAnimation(true);
    timer.current = setTimeout(nextGame, 17000);
  };

  if (lighthouses.length === 0) {
    clearTimeout(timer.current);
    playNonoSound();
  }

  const newGame = () => {
    setIndex(0);
    setPoints(0);
    setLighthouses(lighthousesArray);
    triggerAnimation();
  };

  if (index >= shuffledTargets.length) {
    return <AssessmentTreasure points={points} />;
  }
  return (
    <main className="shooting">
      <section className="shooting__introduction">
        <h1 className="shooting__heading">St????len??</h1>
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
            Sest??eluj pouze slova, kter?? pat???? do ur??it?? kategorie a sb??rej
            zla????ky. Za chybn?? sest??elen?? slovo, p??ijde?? o maj??k st??e????c?? tv??j
            ??ivot.
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
        <ShootingGameover />
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
