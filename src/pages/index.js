import React, { useEffect } from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"

import Layout from "../components/layout"
import Diagram from "../images/diagram.png"
import WaveTop from "../images/bg/wave.svg"
import WaveBottom from "../images/bg/home-wave-bottom.svg"
import BG from "../images/bg/chairs.jpg"


import SEO from "../components/seo"
import SplitText from "react-pose-text"
import styled from "@emotion/styled"


const CustomSection = styled.section`
  position: relative;
  height:100vh;
  background-image:${props => props.bg ? `url('${props.bg}')` : `blue`};
  color:#fff;
  background-size:1600px;
  background-position:bottom;
  background-repeat:no-repeat;
`


const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    x: 0,
    delay: ({ charIndex }) => charIndex * 30,
  },
}

const IndexPage = () => {
  useEffect(() => {})

  return (
    <Layout>
      <SEO title="Aqui Digital - Homepage" />


        <CustomSection bg={BG}>
            <div className="overlay" style={{background:`url(${WaveTop})`, backgroundSize:'cover', height:'100%', backgroundRepeat:'no-repeat', backgroundPosition:'0 180px'}}>
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
                                      The modern design, web development and consultancy firm that makes digital easy.
                                      </SplitText>
                                  </h2>
                              </div>

                        </div>
                      </div>
                </div>
            </div>

        </CustomSection>

      <section className="standard" style={{background:`url(${WaveBottom})`, backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'0 -100px'}}>
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
