const Card = ({title, image, alt}) => {
    return (
      <article className="card">
        <p>{title}</p>
        <img src={image} alt={alt} />
      </article>
    );
}
  
export default Card;