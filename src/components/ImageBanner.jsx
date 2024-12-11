/* -------------------------------------------------------------------------- */
/*                                   IMPORT                                   */
/* -------------------------------------------------------------------------- */

import PropTypes from 'prop-types';

// style
import '../scss/components/imageBanner.scss';

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
function ImageBanner({ label, picture }) {
  return (
    <div className="banner">
      <img src={picture} alt="banner" className="banner__img" />
      <div className="banner__mask"></div>
      {label ? <h1 className="banner__text">{label}</h1> : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  PROPTYPE                                  */
/* -------------------------------------------------------------------------- */

ImageBanner.propTypes = {
  label: PropTypes.string,
  picture: PropTypes.string.isRequired,
};

export default ImageBanner;
