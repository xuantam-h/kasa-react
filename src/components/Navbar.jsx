import '../styles/Navbar.scss';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="main-nav">
            <Link to='/'>Accueil</Link>
            <Link to='/about'>A propos</Link>
        </nav>
    );
}

export default Navbar;