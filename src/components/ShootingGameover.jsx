import React from 'react';

const ShootingGameover = () => {
  return (
    <section className="shooting__field--gameover">
      <h2 className="shooting__gameover">
        Tentokrát to nevyšlo. Zkus to znova!
      </h2>
      <div className="shooting__skull"></div>
      <div className="shooting__fingers"></div>
    </section>
  );
};

export default ShootingGameover;
