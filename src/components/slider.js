import React, { useState , useEffect } from "react"
// import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import { css } from "@emotion/core"


const Slider = ({slides}) => {

  const [curr, setCurr] = useState(0);
  const { length } = slides;


  const goToNext = () => {
    setCurr(curr === length - 1 ? 0 : curr + 1);
  }

  var Timer = function(callback, delay) {
      var timerId, start, remaining = delay;

      this.pause = function() {
          window.clearTimeout(timerId);
          remaining -= Date.now() - start;
      };

      this.resume = function() {
          start = Date.now();
          window.clearTimeout(timerId);
          timerId = window.setTimeout(callback, remaining);
      };

      this.resume();
  };

  var timer = new Timer(function() {
      goToNext()
  }, 4000);


  useEffect(() => {
    timer
  });

  if (!Array.isArray(slides) || length <= 0){
    return null
  }

  return (
    <section css={sliderStyle} aria-roledescription="carousel" aria-label="Introduction Carousel and ummary of services offered">



        {slides.map((s,i)=>(

          <div key={s.title} className={i === curr ? "slide active" : "slide"} aria-roledescription="slide" aria-label={`${i} of ${slides.length} `}>


          <BackgroundImage
            Tag="div"
            fluid={s.src}
            css={bgImageStyle}
          >
          <div className="overlay"></div>

              <div className="slider--text">
                <h1>{s.title}</h1>
              </div>

          </BackgroundImage>


          </div>
        ))}

        <button className="rotation pause" aria-label="Stop automatic slide show" onClick={timer.pause()}>Pause</button>


    </section>
  )
}

export default Slider

const bgImageStyle = css`

width:100%;
height:100%;
/* @media (max-width: 1200px) {
  background-size:60%;
} */
`

const sliderStyle = css`
height:400px;
position:relative;

  .overlay {
    position: absolute; /* Sit on top of the page content */
     width: 100%; /* Full width (cover the whole page) */
     height: 100%; /* Full height (cover the whole page) */
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background-color: rgba(27, 18, 128, 0.2); /* Black background with opacity */
     z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
     cursor: pointer; /* Add a pointer on hover */
  }

  button.pause {
    position:absolute;
    bottom:10px;
    right:10px;
    z-index:4;
  }

  .slide {
    position:absolute;
    width:100%;
    height:100%;
    opacity:0;
    transition: 2s opacity;
    z-index: 1;


    @media (max-width: 768px) {
      padding:0;
    }

    &.active {
      opacity:1;
    }

    h1 {
      margin: 0;
      text-align:center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color:#fff;
      font-size:2rem;
      line-height:1.2;
       z-index: 3;
      @media (max-width: 768px) {
        font-size:1.6rem;
        width:100%;
        padding:20px;
        text-align:center;
      }
    }
  }
`
