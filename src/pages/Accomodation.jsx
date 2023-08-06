import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Collapse from '../components/Collapse';
import Accomodations from '../logements.json';

const Accomodation = () => {

    const {id} = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
      const currentItem = Accomodations.find((accomodation) => accomodation.id === id);
      setItem(currentItem)
    }, []);

    return (
        <div className="Accomodation container">
            <h1 className="accomodation-title">{item.title}</h1>
            <h2 className="accomodation-subtitle">{item.location}</h2>
            <div className="accomodation-description">
              <Collapse 
                title="Description"
                content={item.description}
              />
              <Collapse 
                title="Equipements"
                content={item.equipments}
              />
            </div>
        </div>
    );
}

export default Accomodation;