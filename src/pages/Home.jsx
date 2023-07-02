import Banner from '../components/Banner'; 
import BannerImage from '../assets/banner-home.jpg'; 

const Home = () => {
    return (
      <div className="Home">
        <Banner title="Chez vous, partout et ailleurs" src={BannerImage} alt="Test"/>
      </div>
    );
}
  
export default Home;
  