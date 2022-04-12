import React from 'react';
import WaveIcon from '../components/WaveIcon';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Assessment = ({ text }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="assessment">
      <p className="assessment__text">{text}</p>
      <p className="assessment__text">Otestuj své vědomosti další aktivitou.</p>
      <div className="assessment__picture"></div>
      <WaveIcon />
    </div>
  );
};

Assessment.propTypes = {
  text: PropTypes.string,
};

export default Assessment;
