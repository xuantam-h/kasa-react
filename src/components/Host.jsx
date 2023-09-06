import PropTypes from 'prop-types';

const Host = ({username,picture}) => {
    /* Splitting the name of the host into two variables firstName and lastName. */
    const [firstName, lastName] = username.split(' ');

    return (
        <div className="accomodation-user">
            <p className="accomodation-username">
                {firstName} <br/> {lastName}
            </p>
            <img src={picture} alt={username} />
        </div>
    )
}

Host.propTypes = {
    username: PropTypes.string.isRequired,
    picture: PropTypes.string,
}

Host.defaultProps = {
    username: 'Hôte'
}
  
export default Host;