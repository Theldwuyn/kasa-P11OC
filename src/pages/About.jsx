import DropdownWrapper from '../components/dropdown/DropdownWrapper';
import ImageBanner from '../components/ImageBanner';
import { useFetch } from '../utils/customHooks/useFetch';

import bannerImg from '../assets/aboutBanner.png';
import '../scss/pages/about.scss';

function About() {
  const { data, error } = useFetch('http://localhost:5173/data/apropos.json');

  if (error) {
    return <p>Oups, un problème est survenu</p>;
  }

  return (
    <main>
      <h1 className="sr-only">À propos</h1>
      <ImageBanner picture={bannerImg} />
      <section id="dropdownSection">
        {data &&
          data.map((elem, index) => (
            <DropdownWrapper
              key={`${elem.label}-${index}`}
              label={elem.label}
              content={elem.content}
            />
          ))}
      </section>
    </main>
  );
}

export default About;
