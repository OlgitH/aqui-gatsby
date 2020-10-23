import React from "react"

import Layout from "../components/layout"
import Diagram from "../images/diagram.png"
import WaveTop from "../images/bg/wave.svg"
import WaveBottom from "../images/bg/home-wave-bottom.svg"
import BG from "../images/bg/chairs.jpg"


import SEO from "../components/seo"
import SplitText from "react-pose-text"
import styled from "@emotion/styled"
import { css } from "@emotion/core"




const IndexPage = () => {

  return (
    <Layout>

    <SEO
      title="Aqui Digital - Homepage"
      description="A modern design, web development and consultancy agency that makes digital easy."
      url="https://aqui.agency"
    />


        <CustomSection bg={BG}>
            <div className="overlay" css={overlayStyle}>
                <div className="text-box">
                      <div className="container">
                        <div className="row">

                              <div className="col-8">
                                  <h2 className="slideInLg">
                                      <SplitText
                                        initialPose="exit"
                                        pose="enter"
                                        charPoses={charPoses}
                                      >
                                      A modern design, web development and consultancy agency that makes digital easy.
                                      </SplitText>
                                  </h2>
                              </div>

                        </div>
                      </div>
                </div>
            </div>

        </CustomSection>

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
              <img src={Diagram} width="100%" alt="Diagram of Design Process"/>
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




const CustomSection = styled.section`
  position: relative;
  height:100vh;
  background-image:${props => props.bg ? `url('${props.bg}')` : `blue`};
  color:#fff;
  background-size:1600px;
  background-position:bottom;
  background-repeat:no-repeat;
  max-height:690px;
`

const designProcess = css`
background:url(${WaveBottom});
background-size: contain;
background-repeat: no-repeat;
background-position: 0 -100px;
@media (max-width: 1200px) {
  background-position: 0 -20px;
}
`

const overlayStyle = css`
  background: url(${WaveTop});
  background-size:cover;
  height:100%;
  background-repeat:no-repeat;
  background-position:0 180px;
`


const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    x: 0,
    delay: ({ charIndex }) => charIndex * 30,
  },
}
