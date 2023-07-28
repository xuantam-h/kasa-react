import { useParams } from 'react-router-dom'
import Collapse from '../components/Collapse';

const Accomodation = () => {

    const { accomodationId, accomodationTitle, accomodationDescription, accomodationEquipments } = useParams();

    return (
        <div className="Accomodation container">
            <h1>{ accomodationTitle }</h1>
            <Collapse 
              title="Description"
              content={accomodationDescription}
            />
            <Collapse 
              title="Equipements"
              content={accomodationEquipments}
            />
        </div>
    );
}

export default Accomodation;