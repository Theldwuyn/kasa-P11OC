/* -------------------------------------------------------------------------- */
/*                                   IMPORT                                   */
/* -------------------------------------------------------------------------- */

import bannerImg from '../assets/homeBanner.jpg';
import ImageBanner from '../components/ImageBanner';
import LogementCard from '../components/LogementCard';
import { Link } from 'react-router';
import { useFetch } from '../utils/customHooks/useFetch';

// style
import '../scss/pages/home.scss';

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */

function Home() {
  const { data, error } = useFetch('../../data/logements.json');

  if (error) {
    return (
      <main>
        <h1>
          Oups, nous ne parvenons pas à récupérer les données des logements
        </h1>
      </main>
    );
  }
  return (
    <main>
      <ImageBanner picture={bannerImg} label="Chez vous, partout et ailleurs" />
      <section id="logementSection">
        {data &&
          data.map((logement) => (
            <Link
              key={`logement-${logement.id}`}
              to={`/logement/${logement.id}`}
            >
              <LogementCard
                key={`${logement.id}-${logement.title}`}
                title={logement.title}
                picture={logement.cover}
              />
            </Link>
          ))}
      </section>
    </main>
  );
}

export default Home;
