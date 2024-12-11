/* -------------------------------------------------------------------------- */
/*                                   IMPORT                                   */
/* -------------------------------------------------------------------------- */

import PropTypes from 'prop-types';

// style
import '../scss/components/logementCard.scss';

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
function LogementCard({ title, picture }) {
  return (
    <article className="logementCard">
      <img src={picture} alt={title} className="logementCard__img" />
      <h2 className="logementCard__title">{title}</h2>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  PROPTYPE                                  */
/* -------------------------------------------------------------------------- */

LogementCard.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default LogementCard;
