const Scoreboard = ({ rightAnswerPoints, wrongAnswerPoints }) => {
  return (
    <section className="scoreboard">
      <span className="scoreboard__rightAnswerPoints">
        Získané body: {rightAnswerPoints}/4.
      </span>
      <span>Počet chyb: {wrongAnswerPoints}.</span>
    </section>
  );
};

export default Scoreboard;
