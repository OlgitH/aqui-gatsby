import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SplitText from "react-pose-text"
import WaveBottom from "../images/bg/about-wave-bottom.svg"
import Wave from "../images/bg/about-wave-blue.svg"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import CafeComponent from '../components/cafe-section.js'
import Img from  'gatsby-image'

const AboutPage = ({data}) => {


  return (
    <Layout blueText="true" fixed="true" bgCol="#f6f6f6">
      <SEO
      title="About"
      description="We are a multidisciplinary, international digital agency"
      />

      <div className="hero" css={heroSection}>

      <div className="container">
        <div className="row justify-content-center">



              <h1>
                  <SplitText
                    initialPose="exit"
                    pose="enter"
                    charPoses={charPoses}
                  >
                  We are a small, multidisciplinary digital agency.
                  </SplitText>
              </h1>

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

        <section css={topSection}>



                      <div className="container">
                        <div className="row">

                              <div className="col-md-4 align-self-end" >

                                  <Img fixed={data.image1.childImageSharp.fixed}/>

                                  <p>
                                    We're currently working on a Mental Health App using React Native
                                  </p>

                              </div>

                              <div className="col-md-4 align-self-end">

                                  <Img fixed={data.image2.childImageSharp.fixed} />

                                  <p>
                                    We're building a web application to help trainee lawyers...
                                  </p>

                              </div>

                              <div className="col-md-4 align-self-end">

                                  <Img fixed={data.image3.childImageSharp.fixed} />

                                  <p>
                                    We recently finished a custom payment portal for a charity, that uses the Stripe payment gateway...
                                  </p>

                              </div>


                        </div>
                      </div>


        </section>

        <section>
          <CafeComponent />
        </section>

        <section className="standard" css={skillset}>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h3>Skillset</h3>
                <p>
                  We specialise in building sites using the so-called JAMStack, using front end technologies such as React, Next Js and Gatsby.
                  For the backend we use Node Js or PHP.
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

const heroSection = css`
  position: relative;
  background:#fff;
  padding:60px 0;
  text-align:center;


  h1 {
    font-family: 'UniversLTStd-Bold';
    text-align:center;
    line-height:1.2;
    margin-bottom:40px;
    margin-top:0;
      width:600px;
  }

  p {
    color:#000;
    text-align:center;
    width:670px;
  }


`

const topSection = css`
  position: relative;
  background:#00f090;
  padding:60px 0;


  h2 {
    font-family: 'UniversLTStd-Bold';
  }
  p{
    @media (min-width: 1024px) {
      width:86%;
    }
  }
`

const skillset = css`
background-size: cover;
background-repeat: no-repeat;
background-position: 0 -70px;
@media (max-width: 1200px) {
  background-position: 0 -20px;
}
padding:200px 0;
@media (max-width: 768px) {
  padding:140px 0;
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
  fragment iconImage on File {
    childImageSharp {
      fixed(width: 180) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`


export const iconImages = graphql`
  query {
    image1: file(relativePath: { eq: "about-icons/mental-health-app.png" }) {
      ...iconImage
    }
    image2: file(relativePath: { eq: "about-icons/legal.png" }) {
      ...iconImage
    }
    image3: file(relativePath: { eq: "about-icons/coin.png" }) {
      ...iconImage
    }

  }
`
