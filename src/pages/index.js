import React, { useEffect } from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"

import Layout from "../components/layout"
import Image from "../components/images/homeImage"
import Diagram from "../components/images/workflowImage"

import SEO from "../components/seo"
import SplitText from "react-pose-text"
import styled from "@emotion/styled"


const CustomSection = styled.section`
  position: relative;
  min-height: 400px;
  padding:1rem 0 2rem 0;

  @media (max-width: 600px) {
    height: 200px;
  }

  @media (max-width: 600px) {
    margin-top: 2rem;
  }
  .overlay {
    position: relative;
    background-color: rgba(255, 255, 255, 0.9);
    height: auto;
    overflow: hidden;
    padding: 10px;
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
  width: 100%;
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

const IndexPage = () => {
  useEffect(() => {})

  return (
    <Layout>
      <SEO title="Oliver Berman - Homepage" />

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                I am a UX designer and web developer based in London. I specialise in using the Adobe Creative Suite, Adobe XD, Javascript, html and css.
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
              <div className="overlay">
                <h2>
                  <SplitText
                    initialPose="exit"
                    pose="enter"
                    charPoses={charPoses}
                  >
                    I design and build products for a digital world.
                  </SplitText>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </CustomSection>

      <section style={{background:'#ff4d4d', padding:'2rem 0', color:'#fff'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h3>Design process</h3>
              <p>All my creative projects start with a piece of paper and a pencil. It is crucial to plan, design and prototype as much as possible before writing any code.
                I try to apply the core principles of UX wherever possible.
              </p>
            </div>
            <div className="col-md-7">
              <Diagram />
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default IndexPage
