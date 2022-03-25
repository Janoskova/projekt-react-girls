import React from 'react';
import MapCard from '../components/MapCard';
import PathNA from '../components/PathNA';
import PathAS from '../components/PathAS';
import PathAU from '../components/PathAU';
import PathAF from '../components/PathAF';
import PathEU from '../components/PathEU';
import PathSA from '../components/PathSA';
import { places } from '../data';
import { useState } from 'react';

const Map = () => {
  const [answer, setAnswer] = useState(null);

  const showResult = (result) => {
    setAnswer(result);
  };

  return (
    <>
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
          {places.map((place) => {
            return (
              <MapCard text={place.text} key={place.id} answer={place.answer} />
            );
          })}
        </section>
        {answer === true ? (
          <div className="modal">
            <button
              onClick={() => setAnswer(null)}
              className="modal__close"
            ></button>
            <p className="modal__text">
              Skvělé! Doplul jsi na správné místo. Pokračuj dál ve své cestě.
            </p>
            <div className="modal__boat modal__boat--right"></div>
          </div>
        ) : null}
        {answer === false ? (
          <div className="modal">
            <button
              onClick={() => setAnswer(null)}
              className="modal__close"
            ></button>
            <p className="modal__text">
              Doplul jsi do nesprávných vod. Změň své lodi směr a zkus to znova!
            </p>
            <div className="modal__boat modal__boat--wrong"></div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Map;
