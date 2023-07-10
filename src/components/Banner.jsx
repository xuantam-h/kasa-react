import '../styles/Banner.scss';

const Banner = ({title, src, alt}) => {
    return (
        <div className="banner-container">
            <h1>{title}</h1>
            <img src={src} alt={alt} />
        </div>
    );
}

export default Banner;