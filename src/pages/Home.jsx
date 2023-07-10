import Banner from '../components/Banner'; 
import BannerImage from '../assets/banner-home.jpg'; 
import Card from '../components/Card';
import Accomodations from '../logements.json';

const Home = () => {
    return (
      <div className="Home container">
        <Banner title="Chez vous, partout et ailleurs" src={BannerImage} alt="Test"/>
        <div className="accomodations-list">
        {
          Accomodations.map( accomodation => {
            return (
              <Card 
                  key={accomodation.id}
                  title={accomodation.title}
                  image={accomodation.cover}
                  alt={accomodation.title} 
              />
            );
          })
        }
        </div>
      </div>
    );
}
  
export default Home;
  