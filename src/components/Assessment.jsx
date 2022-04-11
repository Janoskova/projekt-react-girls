import React from 'react';
import WaveIcon from '../components/WaveIcon';

const Assessment = ({ text }) => {
  return (
    <div className="assessment">
      <p className="assessment__text">{text}</p>
      <p className="assessment__text">Otestuj své vědomosti další aktivitou.</p>
      <div className="assessment__picture"></div>
      <WaveIcon />
    </div>
  );
};

export default Assessment;
