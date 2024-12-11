/* -------------------------------------------------------------------------- */
/*                                   IMPORT                                   */
/* -------------------------------------------------------------------------- */

import { Link } from 'react-router';

// style
import '../scss/pages/errorPage.scss';

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */

function ErrorPage() {
  return (
    <div className="errorPage">
      <h1 className="errorPage__title">404</h1>
      <p className="errorPage__message">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
      <Link to={'/'} className="errorPage__link">
        Retourner sur la page d&apos;accueil
      </Link>
    </div>
  );
}

export default ErrorPage;
