import DropdownWrapper from '../components/dropdown/DropdownWrapper';
import ImageBanner from '../components/ImageBanner';
import data from '../data/apropos.json';

import bannerImg from '../assets/aboutBanner.png';
import '../scss/pages/about.scss';

function About() {
  return (
    <main>
      <h1 className="sr-only">À propos</h1>
      <ImageBanner picture={bannerImg} />
      <section id="dropdownSection" data-testid="dropdownSection">
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
