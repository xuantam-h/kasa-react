import '../styles/Navbar.scss';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="main-nav">
            <Link to='/' className='test'>Accueil</Link>
            <Link to='/about' className='test'>A propos</Link>
        </nav>
    );
}

export default Navbar;