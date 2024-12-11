/* -------------------------------------------------------------------------- */
/*                                   IMPORT                                   */
/* -------------------------------------------------------------------------- */

import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';
import { useState } from 'react';

import DropdownContent from './DropdownContent';

// style
import '../../scss/components/dropdown.scss';

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */

function DropdownWrapper({ label, content }) {
  const [isShown, setIsShown] = useState(false);

  const iconClass = isShown ? 'rotate' : '';
  const labelClass = isShown ? 'show' : '';

  function toggleShow() {
    setIsShown((prevIsShown) => !prevIsShown);
  }

  return (
    <div className={'dropdown'}>
      <h2 className={`dropdown__label ${labelClass}`} onClick={toggleShow}>
        {label}
      </h2>
      <FontAwesomeIcon
        icon={faChevronUp}
        className={`dropdown__icon ${iconClass}`}
        onClick={toggleShow}
        title={label}
      />
      <DropdownContent isShown={isShown} content={content} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  PROPTYPE                                  */
/* -------------------------------------------------------------------------- */

DropdownWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(PropTypes.string).isRequired,
  ]),
};

export default DropdownWrapper;
