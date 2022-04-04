import React from 'react';

const Modal = ({ close, info, reply }) => {
  return (
    <div className={reply ? 'modal modal__right' : 'modal modal__wrong'}>
      <button onClick={() => close(null)} className="modal__close"></button>
      <p className="modal__text">
        {reply
          ? `Správně! ${info}`
          : 'Doplul jsi do nesprávných vod. Změň své lodi směr a zkus to znova!'}
      </p>
      <div className="modal__boat modal__boat--right"></div>
    </div>
  );
};

export default Modal;
