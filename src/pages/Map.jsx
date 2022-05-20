import React from 'react';
import { places } from '../data';
import { useState, useEffect } from 'react';
import ShuffleArray from '../utils/ShuffleArray';
import MapCard from '../components/MapCard';
import PathNA from '../components/PathNA';
import PathAS from '../components/PathAS';
import PathAU from '../components/PathAU';
import PathAF from '../components/PathAF';
import PathEU from '../components/PathEU';
import PathSA from '../components/PathSA';
import Modal from '../components/Modal';
import Assessment from '../components/Assessment';
import Scoreboard from '../components/Scoreboard';

const Map = () => {
  const cardIndexAsNumber = Number(sessionStorage.getItem('cardIndex'));
  const [cardIndex, setCardIndex] = useState(cardIndexAsNumber);
  const [shuffledPlaces] = useState(ShuffleArray(places));
  const place = shuffledPlaces[cardIndex];
  const [answer, setAnswer] = useState(null);
  const [placeOnMap, setPlaceOnMap] = useState(false);
  const rightAnswerPointsAsNumber = Number(
    sessionStorage.getItem('rightAnswerPoints'),
  );
  const [rightAnswerPoints, setRightAnswerPoints] = useState(
    rightAnswerPointsAsNumber,
  );
  const wrongAnswerPointsAsNumber = Number(
    sessionStorage.getItem('wrongAnswerPoints'),
  );
  const [wrongAnswerPoints, setWrongAnswerPoints] = useState(
    wrongAnswerPointsAsNumber,
  );

  useEffect(() => {
    if (cardIndex < places.length) {
      sessionStorage.setItem('cardIndex', cardIndex.toString());
    }
  }, [cardIndex]);

  useEffect(() => {
    if (cardIndex < places.length) {
      sessionStorage.setItem('rightAnswerPoints', rightAnswerPoints.toString());
    }
  }, [rightAnswerPoints, cardIndex]);

  useEffect(() => {
    if (cardIndex < places.length) {
      sessionStorage.setItem('wrongAnswerPoints', wrongAnswerPoints.toString());
    }
  }, [wrongAnswerPoints, cardIndex]);

  const showResult = (result) => {
    setAnswer(result);
  };

  const showPlaceOnMap = (showRedCircle) => {
    setPlaceOnMap(showRedCircle);
  };

  const closeModal = (close) => {
    setAnswer(close);
    if (answer === true) {
      setCardIndex(cardIndex + 1);
      setRightAnswerPoints(rightAnswerPoints + 1);
      setPlaceOnMap(false);
    } else {
      setWrongAnswerPoints(wrongAnswerPoints + 1);
      setPlaceOnMap(false);
    }
  };

  if (cardIndex >= places.length) {
    sessionStorage.clear();
    return (
      <Assessment
        text={`Skvělé! Objel jsi celý svět a jsi v cíli. Získané body ${rightAnswerPoints}/${places.length}. Počet chyb: ${wrongAnswerPoints}.`}
      />
    );
  }
  return (
    <main className="map">
      <h1 className="map__heading">Přesouvání po mapě</h1>
      <p className="map__instruction">Umísti kartičku na správný kontinent.</p>
      <Scoreboard
        rightAnswerPoints={rightAnswerPoints}
        wrongAnswerPoints={wrongAnswerPoints}
        total={places.length}
      />
      <section className="map__container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1"
          viewBox="0 0 1052.4 580"
        >
          <PathNA
            result={showResult}
            text={place.text}
            showRedCircle={showPlaceOnMap}
            placeOnMap={placeOnMap}
          />
          <PathAS
            result={showResult}
            text={place.text}
            showRedCircle={showPlaceOnMap}
            placeOnMap={placeOnMap}
          />
          <PathAU
            result={showResult}
            text={place.text}
            showRedCircle={showPlaceOnMap}
            placeOnMap={placeOnMap}
          />
          <PathAF
            result={showResult}
            text={place.text}
            showRedCircle={showPlaceOnMap}
            placeOnMap={placeOnMap}
          />
          <PathEU
            result={showResult}
            text={place.text}
            showRedCircle={showPlaceOnMap}
            placeOnMap={placeOnMap}
          />
          <PathSA
            result={showResult}
            text={place.text}
            showRedCircle={showPlaceOnMap}
            placeOnMap={placeOnMap}
          />
        </svg>
      </section>
      <nav className="map__navigation">
        {<MapCard text={place.text} key={place.id} answer={place.answer} />}
        {answer !== null ? (
          <Modal close={closeModal} info={place.info} reply={answer} />
        ) : null}
      </nav>
    </main>
  );
};

export default Map;
