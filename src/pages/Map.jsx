import React from 'react';
import MapCard from '../components/MapCard';
import PathNA from '../components/PathNA';
import PathAS from '../components/PathAS';
import PathAU from '../components/PathAU';
import PathAF from '../components/PathAF';
import PathEU from '../components/PathEU';
import PathSA from '../components/PathSA';
import ModalRight from '../components/ModalRight';
import ModalWrong from '../components/ModalWrong';
import ShuffleArray from '../utils/ShuffleArray';
import Assessment from '../components/Assessment';
import { places } from '../data';
import { useState } from 'react';

const Map = () => {
  const [answer, setAnswer] = useState(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [shuffledPlaces] = useState(ShuffleArray(places));
  const place = shuffledPlaces[cardIndex];

  const showResult = (result) => {
    setAnswer(result);
  };

  const closeModalRight = (closeRight) => {
    setAnswer(closeRight);
    setCardIndex(cardIndex + 1);
  };

  const closeModalWrong = (closeWrong) => {
    setAnswer(closeWrong);
  };

  return (
    <>
      {place && (
        <div className="map">
          <h1 className="map__heading">Přesouvání po mapě</h1>
          <p className="map__instruction">
            Umísti kartičku na správný kontinent.
          </p>
          <section className="map__container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1"
              viewBox="0 0 1052.4 580"
            >
              <PathNA result={showResult} />
              <PathAS result={showResult} />
              <PathAU result={showResult} />
              <PathAF result={showResult} />
              <PathEU result={showResult} />
              <PathSA result={showResult} />
            </svg>
          </section>
          <section className="map__cards">
            {<MapCard text={place.text} key={place.id} answer={place.answer} />}
          </section>
          {answer === true ? (
            <ModalRight closeRight={closeModalRight} info={place.info} />
          ) : null}
          {answer === false ? (
            <ModalWrong closeWrong={closeModalWrong} />
          ) : null}
        </div>
      )}
      {cardIndex >= places.length && <Assessment />}
    </>
  );
};

export default Map;
