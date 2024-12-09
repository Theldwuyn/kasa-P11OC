import PropTypes from 'prop-types';
import RatingStars from './RatingStars';
import '../scss/components/logementDescription.scss';

function formatName(name) {
  return name.split(' ');
}

function LogementDescription({ label, location, host, rating, tags }) {
  return (
    <div className="description" data-testid="main-component">
      <div className="description__logement">
        <h1 className="description__logement--title">{label}</h1>
        <p className="description__logement--location">{location}</p>
        <div className="description__logement--tag">
          {tags.map((tag) => (
            <p key={tag} className="description__logement--tag--item">
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="description__host">
        <div className="description__host--wrapper">
          <p className="description__host--name">
            {formatName(host.name).map((elem) => (
              <span key={elem}>{elem}</span>
            ))}
          </p>
          <img
            src={host.picture}
            alt={host.name}
            className="description__host--picture"
          />
        </div>
        <RatingStars rating={rating} />
      </div>
    </div>
  );
}

LogementDescription.propTypes = {
  label: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  host: PropTypes.objectOf(PropTypes.string).isRequired,
  rating: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LogementDescription;
