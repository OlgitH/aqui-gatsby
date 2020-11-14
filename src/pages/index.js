import React from "react"

import Layout from "../components/layout"
import Slider from "../components/slider"
import Diagram from "../images/diagram.png"
import WaveTop from "../images/bg/wave.svg"
import WaveBottom from "../images/bg/home-wave-bottom.svg"
import TopImage from "../images/people-on-computer.jpg"
import BG from "../images/bg/chairs.jpg"
import SvgWeb from '../components/svg-components/web.js'
import SvgDesign from '../components/svg-components/design.js'
import SvgSEO from '../components/svg-components/seo.js'





import SEO from "../components/seo"
import SplitText from "react-pose-text"
import styled from "@emotion/styled"
import { css } from "@emotion/core"






const IndexPage = ({data}) => {

  const defaultSlides = [
    {
      title: 'A full stack web development agency',
      src: data.image1.childImageSharp.fluid
    },
    {
      title: 'We specialise in Next JS and Gatsby',
      src: data.image2.childImageSharp.fluid
    },
    {
      title: 'We help new businesses and teach digital skills',
      src: data.image3.childImageSharp.fluid
    },
  ]



  return (
    <Layout fixed="true" blueText="true" bgCol="#f6f6f6">

    <SEO
      title="Homepage"
      description="A web development, design and consultancy agency."
      url="https://aqui.agency"
    />

      <section css={topSection}>
      <div className="inner">
                  <Slider slides={defaultSlides} />
      </div>
      </section>

      <div className="section" css={greenSection}>
          <div className="text-box">
                <div className="container">
                  <div className="row">

                        <div className="col-md-8 col-12">
                            <h2 className="slideInLg">
                            <em>
                                <SplitText
                                  initialPose="exit"
                                  pose="enter"
                                  charPoses={charPoses}
                                >
                                "It has been great working with Aqui. They provide the digital expertise
                                and foresight that helps us to develop our mental health app."
                                </SplitText>
                            </em>

                            </h2>
                            <h6>- Jonathan Rose, NHS England</h6>
                        </div>

                  </div>
                </div>
          </div>
      </div>




        <section className="services" css={servicesSection}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                      <SvgWeb
                        x={0}
                        y={0}
                        viewBox="0 0 829 733"
                        xmlSpace="preserve"
                      />
                    </div>
                    <div className="col-md-4">
                      <SvgDesign
                        x={0}
                        y={0}
                        viewBox="0 0 829 733"
                        xmlSpace="preserve"
                      />
                    </div>
                    <div className="col-md-4">
                      <SvgSEO
                        x={0}
                        y={0}
                        viewBox="0 0 829 733"
                        xmlSpace="preserve"
                      />
                    </div>
                </div>
            </div>
        </section>



      <section className="standard" css={designProcess}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h3>Design process</h3>
              <p>All our creative projects start with a piece of paper and a pencil. We plan, design and prototype as much as possible before writing any code.
                We follow a User Centered approach.
              </p>
            </div>
            <div className="col-md-7">
                <div className="diagramImgWrap">
                  <img src={Diagram} width="100%" alt="Diagram of Design Process"/>
                </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default IndexPage


// Styles etc go here
////////////**********************/////////////////////////////////////////////////





const sliderWrap = css`
@media (max-width: 768px) {
  position:relative;
  height:300px;
  width:100%;
}
`
const servicesSection = css`
padding-top:140px;
`

const topSection = css`
  /* padding: 20px 0; */
  @media (max-width: 768px) {
    padding: 0;
  }
  .inner {
    /* position:relative; */
  }

  .top-section--left {
    padding:100px 15px 100px 0;
    @media (max-width: 768px) {
      padding:100px 0;
    }
  }

  .top-section-image {
    position:absolute;
    right:0;
    top:0;
    width:40%;
  }

  h2 {
    fontFamily:'UniversLTStd-Bold';
    fontSize:'2rem'
  }
`

const greenSection = css`
  background-color:#00f090;
  padding:100px 0;
`

const designProcess = css`
  /* background:url(${WaveBottom}); */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0 -100px;
  padding:200px 0;
  @media (max-width: 768px) {
    padding:140px 0;
  }
  @media (max-width: 1200px) {
    background-position: 0 -20px;
  }
  .diagramImgWrap {
    padding:40px;
    @media (max-width: 768px) {
      padding:0;
    }
  }
`




// const overlayStyle = css`
//   background: url(${WaveTop});
//   background-size:cover;
//   height:280px;
//   background-repeat:no-repeat;
//   background-position:0 0;
//   position:absolute;
//   bottom:0;
//   left:0;
//   width:100%;
//
//   .text-box {
//     position:absolute;
//     width:500px;
//     bottom:4rem;
//     @media (max-width: 768px) {
//       bottom:2rem;
//     }
//   }
// `

const Button = styled.button`
 background-color:#fff;
 border-radius: 10px;
 -webkit-border-radius: 10px;
 cursor:pointer;
 padding:6px 10px;
 outline:0;
 border:0;
 margin-top:20px;
 &:hover {
   background-color:#fff;

 }
`


const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    x: 0,
    delay: ({ charIndex }) => charIndex * 30,
  },
}

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`


export const sliderImagesQuery = graphql`
  query {

    image1: file(relativePath: { eq: "slider/people-on-computer.jpg" }) {
      ...squareImage
    }
    image2: file(relativePath: { eq: "slider/digital.jpg" }) {
      ...squareImage
    }
    image3: file(relativePath: { eq: "slider/smallbusiness.png" }) {
      ...squareImage
    }


  }
`
