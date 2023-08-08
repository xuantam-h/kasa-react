import { useParams } from 'react-router-dom';

import Collapse from '../components/Collapse';
import Slideshow from '../components/Slideshow';
import Tag from '../components/Tag';

import Accomodations from '../logements.json';
import '../styles/Accomodation.scss';

const Accomodation = () => {

    /* Getting the id params in the URL */
    const {id} = useParams();
    /* Filtering to get the current accomodation page */
    const currentAccomodation = Accomodations.find((accomodation) => accomodation.id === id);

    return (
        <div className="Accomodation container">
          <div className="accomodation-container">
            <div className="accomodation-left">
              <h1 className="accomodation-title">{currentAccomodation.title}</h1>
              <h2 className="accomodation-subtitle">{currentAccomodation.location}</h2>
              <ul className="accomodation-tags">
                {currentAccomodation.tags.map((tag, index) => <li key={index} className="accomodation-tag">{tag}</li>)}
              </ul>
            </div>
            <div className="accomodation-right">
              <div className="accomodation-user">
                <img src={currentAccomodation.host.picture} alt={currentAccomodation.host.name} />
                <p className="accomodation-username">{currentAccomodation.host.name}</p>
              </div>
            </div>
          </div>
          <div className="accomodation-description">
              <Collapse 
                title="Description"
                content={currentAccomodation.description}
              />
              <Collapse 
                title="Equipements"
                content={currentAccomodation.equipments}
              />
            </div>
        </div>
    );
}

export default Accomodation;