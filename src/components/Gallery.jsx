import '../styles/Gallery.scss';
import {useState} from 'react';
import sliderArrow from '../assets/slider-arrow.svg';

const Gallery = ({slides, title}) => {

    /* Hook state for current item in slider */
    const [current, setCurrent] = useState(0); // Setting the default slide to be the first '0'
    const slidesLength = slides.length;

    /* Defining click functions */
    const handlePrev = () => {
        setCurrent(current === 0 ? slidesLength - 1 : current - 1); // If the current slide is the first slide (0) then go to the last slide if we click previous
    };

    const handleNext = () => {
        setCurrent(current === slidesLength - 1 ? 0 : current + 1); // If the current slide is the last slide then go to the first slide (0) if we click next
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
          <p>{current + 1}/{slidesLength}</p>
        </div>
      </div>
    )
}
  
export default Gallery;