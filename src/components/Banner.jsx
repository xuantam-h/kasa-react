import '../styles/Banner.scss';
import PropTypes from 'prop-types';

const Banner = ({title, src, alt}) => {
    return (
        <div className="banner-container">
            <h1>{title}</h1>
            <img src={src} alt={alt} />
        </div>
    )
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default Banner;