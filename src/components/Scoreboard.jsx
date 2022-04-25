import PropTypes from 'prop-types';

const Scoreboard = ({ rightAnswerPoints, wrongAnswerPoints, total }) => {
  return (
    <section className="scoreboard">
      <span className="scoreboard__rightAnswerPoints">
        Získané body: {rightAnswerPoints}/{total}.
      </span>
      <span>Počet chyb: {wrongAnswerPoints}.</span>
    </section>
  );
};

Scoreboard.propTypes = {
  rightAnswerPoints: PropTypes.number,
  wrongAnswerPoints: PropTypes.number,
  total: PropTypes.number,
};

export default Scoreboard;
