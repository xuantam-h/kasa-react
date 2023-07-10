import {useState, useRef} from 'react'
import chevron from '../assets/chevron.svg'
import '../styles/Collapse.scss';

const Collapse = ({title, content}) => {
  
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  const toggleState = () => {
    setToggle(!toggle)
  }

    return (
      <>
      <div className="collapse">
        <button className="collapse-header" onClick={toggleState}>
          <span>{title}</span>
          <img src={chevron} alt="Chevron" />
        </button>
        <div 
        className={toggle ? 'collapse-visible' : 'collapse-hidden'}
        ref={refHeight}
        >
          <div className="collapse-body">
            <p>{content}</p>
          </div>
        </div>
      </div>
      </>
    );
}

export default Collapse;