import React from 'react';

const categories = [{ category: 'Plodiny a zvířata dovezené z Ameriky' }];

const targets = [
  [
    {
      word: 'morče',
      answer: true,
      id: 1,
    },
    {
      word: 'brambory',
      answer: true,
      id: 2,
    },
    {
      word: 'rýže',
      answer: false,
      id: 3,
    },
    {
      word: 'krocan',
      answer: true,
      id: 4,
    },
    {
      word: 'čaj',
      answer: false,
      id: 5,
    },
    {
      word: 'kukuřice',
      answer: true,
      id: 6,
    },
    {
      word: 'kůň',
      answer: false,
      id: 7,
    },
    {
      word: 'brambory',
      answer: true,
      id: 8,
    },
  ],
];

const Shooting = () => {
  const items = targets[0];
  return (
    <main className="shooting">
      <h1>Střílení</h1>
      <p className="shooting__instruction">
        Sestřeluj pouze slova, která patří do dané kategorie a sbírej zlaťáky.
      </p>
      <p className="shooting__instruction">
        Kategorie:{' '}
        <span className="shooting__category">{categories[0].category}</span>
      </p>
      <button className="shooting__play">Začít hrát</button>
      <section className="shooting__field">
        {items.map((item) => (
          <div className="shooting__target">
            <span className="shooting__word">{item.word}</span>
            <div className="shooting__caravel"></div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Shooting;
