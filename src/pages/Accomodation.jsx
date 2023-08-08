import { useParams } from 'react-router-dom';

import Collapse from '../components/Collapse';
import Slideshow from '../components/Slideshow';
import Tag from '../components/Tag';

import Accomodations from '../logements.json';
import '../styles/Accomodation.scss';

const Accomodation = () => {

    /* Passing the id params in the URL */
    const {id} = useParams();

    /* Filtering to get the current accomodation information */
    const currentAccomodation = Accomodations.find((accomodation) => accomodation.id === id);

    /* Looping the equipments array to get list element in <li> markup */
    const listEquipments = currentAccomodation.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)

    return (
        <div className="Accomodation container">
          <div className="accomodation-container">
            <div className="accomodation-left">
              <h1 className="accomodation-title">{currentAccomodation.title}</h1>
              <h2 className="accomodation-subtitle">{currentAccomodation.location}</h2>
              <ul className="accomodation-tags">
                {currentAccomodation.tags.map((tag, index) => <Tag key={index} content={tag}/>)}
              </ul>
            </div>
            <div className="accomodation-right">
              <div className="accomodation-user">
                <p className="accomodation-username">{currentAccomodation.host.name}</p>
                <img src={currentAccomodation.host.picture} alt={currentAccomodation.host.name} />
              </div>
              <div className="accomodation-ratings">

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
                content={listEquipments}
              />
            </div>
        </div>
    );
}

export default Accomodation;