import bannerImg from '../assets/homeBanner.jpg';
import ImageBanner from '../components/ImageBanner';
import LogementCard from '../components/LogementCard';
import logementData from '../data/logements.json';
import { Link } from 'react-router';
import '../scss/pages/home.scss';

function Home() {
  return (
    <main>
      <ImageBanner picture={bannerImg} label="Chez vous, partout et ailleurs" />
      <section id="logementSection">
        {logementData &&
          logementData.map((logement) => (
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
