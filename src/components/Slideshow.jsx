import '../styles/Slideshow.scss';
import {useState} from 'react';

const Slideshow = ({slides, title}) => {

    /* Hook state for current item in slider */
    const [current, setCurrent] = useState(0); // Setting the default slide to be the first '0'
    const slidesLength = slides.length;

    /* Defining click functions */
    const prevSlide = () => {
        setCurrent(current === 0 ? slidesLength - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === 0 ? slidesLength - 1 : current - 1);
    };

    return (
      <div className='slider-container'>
        {slides.map((slide, index) => {
            return (
                <img src={slide} alt={title} key={index}/>
            )
        })}
      </div>
    );
}
  
export default Slideshow;