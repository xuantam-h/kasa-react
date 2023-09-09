const Host = ({username,picture}) => {
    /* Splitting the name of the username into two variables firstName and lastName. */
    const [firstName, lastName] = username.split(' ');

    return (
        <div className="accomodation-user">
            <p className="accomodation-username">
                {firstName} <br/> {lastName}
            </p>
            <img src={picture} alt={`Profil de ${username}`} />
        </div>
    )
}
  
export default Host;