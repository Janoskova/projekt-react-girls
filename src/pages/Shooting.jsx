import React from 'react';

const Shooting = () => {
  return (
    <main className="shooting">
      <h1>Střílení</h1>
      <p className="shooting__instruction">
        Sestřeluj pouze slova, které nepatří do dané kategorie.
      </p>
      <section className="shooting__field"></section>
    </main>
  );
};

export default Shooting;
