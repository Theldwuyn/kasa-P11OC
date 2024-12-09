import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import '../scss/components/ratingStars.scss';

function RatingStars({ rating }) {
  let stars = [];
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

RatingStars.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default RatingStars;
