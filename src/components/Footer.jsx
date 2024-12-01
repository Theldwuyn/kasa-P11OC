import logo from '../assets/logo_white.svg';

import '../scss/components/footer.scss';

function Footer() {
  return (
    <footer className="appfooter">
      <img src={logo} alt="kasa logo" className="appfooter__logo" />
      <p className="appfooter__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
