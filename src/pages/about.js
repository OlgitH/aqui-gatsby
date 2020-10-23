import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SplitText from "react-pose-text"
import WaveBottom from "../images/bg/about-wave-bottom.svg"
import styled from "@emotion/styled"
import { css } from "@emotion/core"


const AboutPage = () => {


  return (
    <Layout>
      <SEO
      title="About"
      description="We are a multidisciplinary, international digital agency"
      />

        <CustomSection>
            <div className="overlay">
                <div className="text-box">
                      <div className="container">
                        <div className="row">

                              <div className="col-lg-6 col-md-8">
                                  <h2 className="slideInLg">
                                      <SplitText
                                        initialPose="exit"
                                        pose="enter"
                                        charPoses={charPoses}
                                      >
                                      We are a multidisciplinary digital agency.
                                      </SplitText>

                                  </h2>
                                  <br/>
                                  <p>
                                      Aqui means <em><b>here</b></em> in Spanish. With the world increasingly on our doorstep, we like to work with people all over the world,
                                      as if they were <em><b>aquí</b></em>.
                                      </p>
                                      <p>
                                      We love to design and plan websites, but we also love to work on design for print, video, and almost anything with a
                                      creative aspect.
                                      </p>
                                      <p>
                                      We specialise in building sites using the JAMStack approach -
                                      a new and modern way of building sites that give lightning fast performance and are
                                      far more secure because there is no data layer.
                                      </p>





                              </div>

                        </div>
                      </div>
                </div>
            </div>

        </CustomSection>

        <section className="standard" css={skillset}>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h3>Skillset</h3>
                <p>
                  We specialise in building sites using the so-called JAMStack, using front end technologies such as React, Next Js and Gatsby.
                  For the backend I write Node Js or PHP.
                </p>
              </div>

            </div>
          </div>
        </section>

      </Layout>
  )
}

export default AboutPage


// Styles etc go here
////////////**********************/////////////////////////////////////////////////

const CustomSection = styled.section`
  position: relative;
  height:100vh;
  min-height:640px;
  background:${props => props.bg ? `url('${props.bg}')` : `blue`};
  color:#fff;
  background-size:cover;
  background-repeat:no-repeat;
  max-height:800px;
`

const skillset = css`
background:url(${WaveBottom});
background-size: contain;
background-repeat: no-repeat;
background-position: 0 -1px;
@media (max-width: 1200px) {
  background-position: 0 -20px;
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
