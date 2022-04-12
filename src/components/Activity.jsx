import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Activity = ({ heading, path, className }) => {
  return (
    <Link className="activity__link" to={path}>
      <div className="activity__bubble">
        <div className="activity__content">
          <div className={className}></div>
          <h3 className="activity__heading">{heading}</h3>
        </div>
      </div>
    </Link>
  );
};

Activity.propTypes = {
  heading: PropTypes.string,
  path: PropTypes.string,
  className: PropTypes.string,
};

export default Activity;
