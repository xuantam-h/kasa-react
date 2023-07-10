import '../styles/Footer.scss';
import logo from '../assets/logo-w.svg'
const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt='Logo Kasa' className='header-logo' />
            <p>© {currentYear} Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;