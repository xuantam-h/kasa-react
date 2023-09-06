import { useEffect } from 'react';

import Banner from '../components/Banner'; 
import Card from '../components/Card';

import BannerImage from '../assets/banner-home.jpg'; 

import Accomodations from '../logements.json';
import '../styles/Home.scss';

const Home = () => {
  useEffect(() => {
    document.title='Accueil | Kasa'
  }, []);

    return (
      <div className="Home container">
        <Banner title="Chez vous, partout et ailleurs" src={BannerImage} alt="Photo montrant une mer et des rochers"/>
        <div className="accomodations-list">
        {
          Accomodations.map(accomodation => {
            return (
                <Card 
                    key={accomodation.id}
                    title={accomodation.title}
                    image={accomodation.cover}
                    alt={accomodation.title}
                    id={accomodation.id}
                />
            );
          })
        }
        </div>
      </div>
    );
}
  
export default Home;
  