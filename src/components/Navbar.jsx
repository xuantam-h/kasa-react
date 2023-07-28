import '../styles/Navbar.scss';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="main-nav">
            <NavLink to='/'>Accueil</NavLink>
            <NavLink to='/about'>A propos</NavLink>
        </nav>
    );
}

export default Navbar;