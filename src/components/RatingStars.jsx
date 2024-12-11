/* -------------------------------------------------------------------------- */
/*                                   IMPORT                                   */
/* -------------------------------------------------------------------------- */

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

// style
import '../scss/components/ratingStars.scss';

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
function RatingStars({ rating }) {
  let stars = [];
  // rating param in the json file is a string, hence the parseInt()
  for (let i = 0; i < 5; i++) {
    i < parseInt(rating) ? stars.push('redStar') : stars.push('');
  }

  return (
    <div className="starWrapper" data-testid="stars">
      {stars.map((star, index) => (
        <span key={index}>
          {star === 'redStar' ? (
            <FontAwesomeIcon icon={faStar} className="red-star" />
          ) : (
            <FontAwesomeIcon icon={faStar} className="grey-star" />
          )}
        </span>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  PROPTYPE                                  */
/* -------------------------------------------------------------------------- */

RatingStars.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default RatingStars;
