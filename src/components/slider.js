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

  useEffect(() => {
    setTimeout( goToNext, 4000)
  });

  if (!Array.isArray(slides) || length <= 0){
    return null
  }

  return (
    <section css={sliderStyle}>
    {slides.map((s,i)=>(

      <div key={s.title} className={i === curr ? "slide active" : "slide"}>

      <BackgroundImage
        Tag="div"
        fluid={s.src}
        css={bgImageStyle}
      >
          <div className="slider--text">
            <h2>{s.title}</h2>
          </div>
      </BackgroundImage>


      </div>
    ))}
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

  .slide {
    position:absolute;
    width:100%;
    height:100%;
    opacity:0;
    transition: 2s opacity;

    @media (max-width: 768px) {
      padding:0;
    }

    &.active {
      opacity:1;
    }

    h2 {
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color:#fff;
      font-size:2rem;
      line-height:1.2;
    }
  }
`
