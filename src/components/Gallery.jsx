import '../styles/Gallery.scss';
import {useState} from 'react';
import sliderArrow from '../assets/slider-arrow.svg';

const Gallery = ({slides}) => {

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
        
        { // The slider buttons won't show up if there isn't more than 1 slide
          slidesLength > 1 && (
          <button onClick={handlePrev} className='slider-arrow slider-arrow-prev'>
            <img src={sliderArrow} alt="Slider arrow" />
          </button>
        )}

        <div className='slider-image'>
          <img src={slides[current]} alt=''/>
        </div>

        { // The slider buttons won't show up if there isn't more than 1 slide
          slidesLength > 1 && (
          <button onClick={handleNext} className='slider-arrow slider-arrow-next'>
            <img src={sliderArrow} alt="Slider arrow" />
          </button>
        )}
        
        { // Won't display the count if there isn't more than 1 slide
          slidesLength > 1 && (
          <div className='slider-count'>
            <p>{current + 1}/{slidesLength}</p>
          </div>
        )}
        
      </div>
    )
}
  
export default Gallery;