import React, { useEffect } from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap-grid.min.css"

import Layout from "../components/layout"
import Image from "../components/images/aboutImage"
import SEO from "../components/seo"
import SplitText from "react-pose-text"
import styled from "@emotion/styled"

const CustomSection = styled.section`
  position: relative;
  min-height: 400px;
  @media (max-width: 600px) {
    min-height: 300px;
  }

  @media (max-width: 600px) {
    margin-top: 2rem;
  }

  h2 {
    font-size: 4rem;
    line-height: 1;

    @media (max-width: 768px) {
      font-size: 3rem;
    }
    @media (max-width: 600px) {
      min-height: 200px;
      font-size: 2rem;
    }
  }
`
const Line = styled.div`
  position: absolute;
  height: 100%;
  border-left: 1px solid #222;
`

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    x: 0,
    delay: ({ charIndex }) => charIndex * 30,
  },
}

const AboutPage = () => {
  useEffect(() => {})

  return (
    <Layout>
      <SEO title="About" />

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                I studied Visual Communication at University of the Arts
                London, taught by the respected Tony Pritchard. I have worked as
                a web designer for a number of years, and enjoy learning new
                technologies. I always try to improve my skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CustomSection>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-4">
              <Line>
                <Image />
              </Line>
            </div>
            <div className="col-8">
              <h2>
                <SplitText
                  initialPose="exit"
                  pose="enter"
                  charPoses={charPoses}
                >
                  I try to learn from my experience.
                </SplitText>
              </h2>
            </div>
          </div>
        </div>
      </CustomSection>

      <section style={{background:'#ff4d4d', padding:'2rem 0', color:'#fff'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h3>My Skillset</h3>
              <p>
                I specialise in building sites using the so-called JAMStack, using front end technologies such as React, Next Js and Gatsby.
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
