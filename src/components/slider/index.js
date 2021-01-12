
import React, { useRef, useState } from 'react';
import './style.css'
import useSlider from './hooks'

const Slider = ({slides}) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const { goToPreviousSlide, goToNextSlide } = useSlider(slides, currentSlide, setCurrentSlide)


    return (
          <div className="slider">
            <div className="slider--content">
              <button onClick={goToPreviousSlide} className="slider__btn-left">
                <i className="fas fa-angle-left"></i>
              </button>
             <div className="slider--feature">
                 {
                   slides.map((slide, i) => {
                    return(
                      <div key={i} className={`slide ${currentSlide === i ? "active" : ""}`} style={{
                        backgroundImage:
                        `linear-gradient(
                            to right,
                            rgba(27, 18, 128, 1),
                            rgba(27, 18, 128, 0.6)
                          ),url(${slide.src})`
                      }}>
                         <h2 className="feature--text">{slide.title}</h2>
                      </div>
                    )
                   })
                 }
              </div>
              <button onClick={goToNextSlide} className="slider__btn-right">
                <i className="fas fa-angle-right"></i>
              </button>
            </div>
        </div>
    );
}

export default Slider;
