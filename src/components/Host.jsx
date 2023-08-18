import PropTypes from 'prop-types';

const Host = ({username,picture}) => {
    return (
        <div className="accomodation-user">
            <p className="accomodation-username">{username}</p>
            <img src={picture} alt={username} />
        </div>
    )
}

Host.propTypes = {
    username: PropTypes.string.isRequired,
    picture: PropTypes.string,
}
  
export default Host;