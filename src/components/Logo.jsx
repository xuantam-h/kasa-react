import logo from '../assets/logo.svg';
import {NavLink} from 'react-router-dom';

const Logo = () => {
    return (
      <NavLink to='/'>
        <img src={logo} alt='Logo Kasa' className='header-logo' />
      </NavLink>
    );
}
  
  export default Logo;
  