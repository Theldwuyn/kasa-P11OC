/* -------------------------------------------------------------------------- */
/*                                   IMPORT                                   */
/* -------------------------------------------------------------------------- */

import { useNavigate, useParams } from 'react-router';
import { useFetch } from '../utils/customHooks/useFetch';
import LogementDescription from '../components/LogementDescription';
import DropdownWrapper from '../components/dropdown/DropdownWrapper';
import { useEffect } from 'react';
import Slideshow from '../components/Slideshow';

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */

function Logement() {
  const { logementId: queryId } = useParams();
  let navigate = useNavigate();
  const { data, error } = useFetch('../../data/logements.json');

  function filterData(data, id) {
    if (!data) return undefined;
    return data.find((elem) => elem.id === id);
  }

  const logementData = filterData(data, queryId);

  useEffect(() => {
    if (data && !logementData) {
      navigate('/error');
    }
  }, [data, logementData, navigate]);

  if (error) {
    return <p>Oups! Nous ne parvenons pas à récupérer les données</p>;
  }

  if (logementData) {
    return (
      <main>
        <Slideshow pictures={logementData.pictures} />
        <section>
          <LogementDescription
            label={logementData.title}
            location={logementData.location}
            host={logementData.host}
            rating={logementData.rating}
            tags={logementData.tags}
          />
          <div className="collapse">
            <DropdownWrapper
              label="Description"
              content={logementData.description}
            />
            <DropdownWrapper
              label="Équipements"
              content={logementData.equipments}
            />
          </div>
        </section>
      </main>
    );
  }
}

export default Logement;
