import React from 'react';
import PropTypes from 'prop-types';

const ShootingButton = ({
  lighthouses,
  newGame,
  triggerAnimation,
  sailingAnimation,
  index,
}) => {
  return (
    <>
      {lighthouses.length === 0 ? (
        <button className="play" onClick={newGame}>
          Nová hra
        </button>
      ) : (
        <button
          className={sailingAnimation === true ? 'play play--disabled' : 'play'}
          onClick={triggerAnimation}
          disabled={sailingAnimation === true}
        >
          {index === 0 ? 'Začít hrát' : 'Pokračovat ve hře'}
        </button>
      )}
    </>
  );
};

ShootingButton.propTypes = {
  lighthouses: PropTypes.array,
  newGame: PropTypes.func,
  triggerAnimation: PropTypes.func,
  sailingAnimation: PropTypes.bool,
  index: PropTypes.number,
};

export default ShootingButton;
