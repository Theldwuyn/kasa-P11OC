/* -------------------------------------------------------------------------- */
/*                                   IMPORT                                   */
/* -------------------------------------------------------------------------- */

import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import useWindowWidth from '../../utils/customHooks/useWindowWidth';

// no need for stylesheet import as it comes from the parent component DropdownWrapper

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */

function DropdownContent({ isShown, content }) {
  const [renderClass, setClass] = useState('');
  const ref = useRef(null);
  const contentClass = isShown ? 'show' : '';
  const width = useWindowWidth();

  // useEffect triggered each time the window size change to set the height css
  // property needed for the css transition
  useEffect(() => {
    // +5 come from the wrapping div with an absolute position top: -5px
    // ensure the same visual padding around the text
    // ref is the content, <p> or <ul>, we need this height for the animation
    const height = ref.current.offsetHeight + 5;
    ref.current.parentElement.style.setProperty('--height', `${height}px`);

    // set rendered class to set initial state css properties (dropdown closed)
    // if the class is set before useEffect call, the height will be 0, then the
    // transition don't work
    setClass('rendered');
  }, [width]);

  if (Array.isArray(content)) {
    return (
      <div className={`dropdown__content ${renderClass} ${contentClass} `}>
        <ul ref={ref} className={`dropdown__content--text`}>
          {content.map((elem, index) => (
            <li key={`description-${index}`}>{elem}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={`dropdown__content ${renderClass} ${contentClass}`}>
      <p ref={ref} className={`dropdown__content--text`}>
        {content}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  PROPTYPE                                  */
/* -------------------------------------------------------------------------- */

DropdownContent.propTypes = {
  isShown: PropTypes.bool.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(PropTypes.string).isRequired,
  ]),
};

export default DropdownContent;
