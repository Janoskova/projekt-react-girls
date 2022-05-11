import React from 'react';
import WaveIcon from '../components/WaveIcon';
import PropTypes from 'prop-types';

const AssessmentTreasure = ({ points }) => {
  return (
    <div className="treasure">
      <p className="treasure__text">{points}</p>
      <p className="treasure__text">Otestuj své vědomosti další aktivitou.</p>
      <WaveIcon />
    </div>
  );
};

AssessmentTreasure.propTypes = {
  points: PropTypes.number,
};

export default AssessmentTreasure;
