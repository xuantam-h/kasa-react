import '../styles/Card.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({title, image, alt, id}) => {
    return (
      <Link to={`/accomodation/${id}`}>  
        <article className="card">
          <h2 className="card-title">{title}</h2>
          <img src={image} alt={alt} className="card-img" />
        </article>
      </Link>
    )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  alt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
  
export default Card;