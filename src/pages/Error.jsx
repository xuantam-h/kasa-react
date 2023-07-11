import {Link} from 'react-router-dom';
import '../styles/Error.scss';

const Error = () => {
    return (
      <div className="Error">
        <h1 className="big-heading">404</h1>
        <p className="subtitle">Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/'>Retourner sur la page d’accueil</Link>
      </div>
    );
}
  
  export default Error;
  