import '../styles/Slideshow.scss';
import {useState} from 'react';
import sliderArrow from '../assets/slider-arrow.svg';

const Slideshow = ({slides, title}) => {

    /* Hook state for current item in slider */
    const [current, setCurrent] = useState(0); // Setting the default slide to be the first '0'
    const slidesLength = slides.length;

    /* Defining click functions */
    const handlePrev = () => {
        setCurrent(current === 0 ? slidesLength - 1 : current - 1);
    };

    const handleNext = () => {
        setCurrent(current === slidesLength - 1 ? 0 : current + 1);
    };

    return (
      <div className='slider-container'>
        <button onClick={handlePrev} className='slider-arrow slider-arrow-prev'>
          <img src={sliderArrow} alt="Slider arrow" />
        </button>
        <div className='slider-image'>
          <img src={slides[current]} alt={title} />
        </div>
        <button onClick={handleNext} className='slider-arrow slider-arrow-next'>
          <img src={sliderArrow} alt="Slider arrow" />
        </button>
        <div className='slider-count'>
          <p>{current + 1} / {slidesLength}</p>
        </div>
      </div>
    )
}
  
export default Slideshow;