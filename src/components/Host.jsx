const Host = ({username,picture}) => {
    return (
        <div className="accomodation-user">
            <p className="accomodation-username">{username}</p>
            <img src={picture} alt={username} />
        </div>
    );
}
  
export default Host;