import Banner from '../components/Banner';
import BannerImage from '../assets/banner-about.jpg'; 

const About = () => {
    return (
      <div className="About">
        <Banner title="A propos" src={BannerImage} alt="A propos"/>
      </div>
    );
}
  
  export default About;