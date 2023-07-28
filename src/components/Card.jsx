import '../styles/Card.scss';
import { Link } from 'react-router-dom';

const Card = ({title, image, alt, link}) => {
    return (
      <Link to={link}>  
        <article className="card">
          <h2 className="card-title">{title}</h2>
          <img src={image} alt={alt} className="card-img" />
        </article>
      </Link>
    );
}
  
export default Card;