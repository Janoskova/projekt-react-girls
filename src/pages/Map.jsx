import React from 'react';
import MapCard from '../components/MapCard';
import PathNA from '../components/PathNA';
import PathAS from '../components/PathAS';
import PathAU from '../components/PathAU';
import PathAF from '../components/PathAF';
import PathEU from '../components/PathEU';
import PathSA from '../components/PathSA';
import { places } from '../data';

const Map = () => {
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
            <PathNA />
            <PathAS />
            <PathAU />
            <PathAF />
            <PathEU />
            <PathSA />
          </svg>
        </section>
        <section className="map__cards">
          {places.map((place) => {
            return (
              <MapCard text={place.text} key={place.id} answer={place.answer} />
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Map;
