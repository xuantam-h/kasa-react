import '../styles/Card.scss';

const Card = ({title, image, alt}) => {
    return (
      <article className="card">
        <h2 className="card-title">{title}</h2>
        <img src={image} alt={alt} className="card-img" />
      </article>
    );
}
  
export default Card;