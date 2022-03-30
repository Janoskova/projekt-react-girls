import React from 'react';
import WaveIcon from '../components/WaveIcon';

const Assessment = () => {
  return (
    <div className="assessment">
      <p className="assessment__text">
        Skvělé! Jsi znalec zámořských území. Byl by z tebe skvělý mořeplavec.
      </p>
      <p className="assessment__text">Otestuj své znalosti další aktivitou.</p>
      <div className="assessment__picture"></div>
      <WaveIcon />
    </div>
  );
};

export default Assessment;
