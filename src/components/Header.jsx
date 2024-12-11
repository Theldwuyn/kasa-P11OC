/* -------------------------------------------------------------------------- */
/*                                   IMPORT                                   */
/* -------------------------------------------------------------------------- */

import { NavLink } from 'react-router';
import Logo from '../assets/LOGO.svg';

// style
import '../scss/components/header.scss';

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */

function Header() {
  return (
    <header className="appbar">
      <img src={Logo} alt="kasa logo" className="appbar__logo" />
      <nav className="appbar__nav">
        <NavLink to="/" className="appbar__nav--link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="appbar__nav--link">
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
