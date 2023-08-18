import {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import chevron from '../assets/chevron.svg';
import '../styles/Collapse.scss';

const Collapse = ({title, children}) => {
  
  const [toggle, setToggle] = useState(false);

  const refHeight = useRef();

  const toggleState = () => {
    setToggle(!toggle)
  }

    return (
      <>
      <div className="collapse">
        <button className="collapse-header" onClick={toggleState}>
          <span>{title}</span>
          <img src={chevron} alt="Chevron" className={toggle ? 'chevron chevron-animated' : 'chevron chevron-default'} />
        </button>
        <div 
        className={toggle ? 'collapse-visible' : 'collapse-hidden'}
        ref={refHeight}
        >
          <div className="collapse-body">
            {toggle ? children : ''}
          </div>
        </div>
      </div>
      </>
    )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Collapse;