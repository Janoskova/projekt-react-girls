import React from 'react';

const ModalWrong = ({ closeWrong }) => {
  return (
    <div className="modal modal__wrong">
      <button
        onClick={() => closeWrong(null)}
        className="modal__close"
      ></button>
      <p className="modal__text">
        Doplul jsi do nesprávných vod. Změň své lodi směr a zkus to znova!
      </p>
      <div className="modal__boat modal__boat--wrong"></div>
    </div>
  );
};

export default ModalWrong;
