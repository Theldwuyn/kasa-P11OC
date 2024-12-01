import PropTypes from 'prop-types';
import '../scss/components/logementCard.scss';

function LogementCard({ title, picture }) {
  return (
    <article className="logementCard">
      <img src={picture} alt={title} className="logementCard__img" />
      <h2 className="logementCard__title">{title}</h2>
    </article>
  );
}

LogementCard.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default LogementCard;
