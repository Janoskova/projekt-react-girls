import React from 'react';

const ModalRight = ({ closeRight, info }) => {
  return (
    <div className="modal modal__right">
      <button
        onClick={() => closeRight(null)}
        className="modal__close"
      ></button>
      <p className="modal__text">Správně! {info}</p>
      <div className="modal__boat modal__boat--right"></div>
    </div>
  );
};

export default ModalRight;
