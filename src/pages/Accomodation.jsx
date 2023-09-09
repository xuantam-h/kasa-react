import Accomodations from '../logements.json';

import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

import Collapse from '../components/Collapse';
import Gallery from '../components/Gallery';
import Tag from '../components/Tag';
import Host from '../components/Host';
import Rate from '../components/Rate';

import '../styles/Accomodation.scss';

const Accomodation = () => {

    /* Obtaining the id params passed in the URL */
    const {id} = useParams();

    /* Filtering to get the current accomodation information */
    const currentAccomodation = Accomodations.find((accomodation) => accomodation.id === id);

    useEffect(() => {
      document.title=`Page logement | Kasa`
    }, []);
    
    return (
      <>
      { currentAccomodation ? (
        <div className="Accomodation container">
          <Gallery slides={currentAccomodation.pictures} />
          <div className="accomodation-container">
            <div className="accomodation-left">
              <h1 className="accomodation-title">{currentAccomodation.title}</h1>
              <h2 className="accomodation-subtitle">{currentAccomodation.location}</h2>
              <ul className="accomodation-tags">
                {currentAccomodation.tags.map((tag, index) => 
                  <Tag key={index} content={tag} 
                />)}
              </ul>
            </div>
            <div className="accomodation-right">
              <Host 
                username={currentAccomodation.host.name}
                picture={currentAccomodation.host.picture}
              />
              <Rate score={currentAccomodation.rating}/>
            </div>
          </div>
          <div className="accomodation-description">
              <Collapse title="Description">
                <p>{currentAccomodation.description}</p>
              </Collapse>
              <Collapse title="Equipements">
                <ul className="list-none">{currentAccomodation.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>
              </Collapse>
          </div>
      </div>
      ) : (
        // If there is a spelling mistake or an unknown ID in the accomodation URL, redirect the user to the error component
        <Navigate to='*' />
      )}
    </>
    );
};

export default Accomodation;