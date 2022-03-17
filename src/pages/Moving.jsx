import React from 'react';
import MapIcon from '../components/MapIcon';

const Moving = () => {
  return (
    <>
      <div className="map">
        <h1 className="map__heading">Přesouvání po mapě</h1>
        <p className="map__instruction">
          Umísti kartičku na správný kontinent.
        </p>
        <section className="map__container">
          <MapIcon />
        </section>
      </div>
    </>
  );
};

export default Moving;
