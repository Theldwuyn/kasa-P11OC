import PropTypes from 'prop-types';
import '../../scss/components/ImageBanner/imageBanner.scss';

function ImageBanner({ label, picture }) {
  return (
    <div className="banner">
      <img src={picture} alt="banner" className="banner__img" />
      <div className="banner__mask"></div>
      {label ? <h1 className="banner__text">{label}</h1> : null}
    </div>
  );
}

ImageBanner.propTypes = {
  label: PropTypes.string,
  picture: PropTypes.string.isRequired,
};

export default ImageBanner;
