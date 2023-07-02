import Banner from '../components/Banner'; 
import BannerImage from '../assets/banner-home.jpg'; 
import Card from '../components/Card';
import Accomodations from '../logements.json';

const Home = () => {
    return (
      <div className="Home">
        <Banner title="Chez vous, partout et ailleurs" src={BannerImage} alt="Test"/>
        {
          Accomodations.map( accomodation => {
            return (
              <Card key={accomodation.id} title={accomodation.title} alt={accomodation.title} />
            );
          })
        }
        <Card/>
      </div>
    );
}
  
export default Home;
  