/* -------------------------------------------------------------------------- */
/*                                   IMPORT                                   */
/* -------------------------------------------------------------------------- */

import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useState } from 'react';

// style
import '../scss/components/slideshow.scss';

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
function Slideshow({ pictures }) {
  const [index, setIndex] = useState(0);

  function onClickNext() {
    const newIndex = index + 1;
    if (pictures[newIndex]) {
      setIndex(newIndex);
    } else {
      setIndex(0);
    }
  }

  function onClickPrev() {
    const newIndex = index - 1;
    if (newIndex > 0) {
      setIndex(newIndex);
    } else {
      setIndex(pictures.length - 1);
    }
  }

  // If there are several images to display, we need the button to navigate through
  // but if there is only one image, no need for the carrousel UI to be active
  if (pictures.length > 1) {
    return (
      <div className="slideshow">
        <FontAwesomeIcon
          icon={faChevronLeft}
          id="previous-pic"
          onClick={onClickPrev}
          className="slideshow__icon slideshow__icon--prev"
        />
        <img
          src={pictures[index]}
          alt="logement picture"
          className="slideshow__picture"
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          id="next-pic"
          onClick={onClickNext}
          className="slideshow__icon slideshow__icon--next"
        />
        <span className="slideshow__counter">
          {index + 1} / {pictures.length}
        </span>
      </div>
    );
  }

  return (
    <div className="slideshow">
      <img
        src={pictures[0]}
        alt="logement picture"
        className="slideshow__picture"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  PROPTYPE                                  */
/* -------------------------------------------------------------------------- */

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
