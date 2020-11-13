import React, {useRef, useEffect} from 'react';
import Layout from "../components/layout"
import Form from "../components/form/form"
import SEO from "../components/seo"
import SplitText from "react-pose-text"
import { connect } from "react-redux"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Wave from "../images/bg/contact-wave.svg"
import Img from "gatsby-image"
import gsap from 'gsap'


const ContactPage = ({formVisible, toggleForm, data}) => {
let envelopeRef = useRef(null)

useEffect(() => {

  gsap.fromTo(envelopeRef.current,
    {yPercent: 100, y:0, xPercent:-100, x: 0, rotation:180},
    {yPercent: 0, xPercent:0, rotation:0, transformOrigin:"center center"}
  );


}, []);



  return (
    <Layout blueText="true" fixed="true" bgCol="#f6f6f6">
      <SEO title="Contact" />

      <section className="contact_top-section" css={topSection}>
          <div className="container">
              <div className="row">
                <div className="col-md-6">
                <div ref={envelopeRef} >
                <Img fixed={data.file.childImageSharp.fixed} />
                </div>

                </div>


                <div className="col-md-6">
                  <p>
                    All great things start with a conversation. We’d love to hear
                    from you if you have an interesting project.
                  </p>
                  <h2>
                    <SplitText
                      initialPose="exit"
                      pose="enter"
                      charPoses={charPoses}
                    >
                      Get in touch.
                    </SplitText>
                  </h2>
                  <Button
                    onClick={ toggleForm }
                  >
                    Send a message
                  </Button>
                </div>

              </div>
          </div>
      </section>

        <section css={greenSection}>
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-md-9">
          <h2>
          We are particularly keen to take on a headless ecommerce projects. If you have any queries about
          a project you are working on don't hesitate to give us a call!
          </h2>
          </div>
          </div>
        </div>
      </section>



      <Form closeForm={toggleForm} isOpen={formVisible} />

    </Layout>
  )
}


const mapStateToProps = ({ formVisible }) => {
return { formVisible }
}

const mapDispatchToProps = dispatch => {
  return { toggleForm: () => dispatch({ type: `RESET` }) }
}

const ConnectedContactPage = connect(mapStateToProps, mapDispatchToProps)(ContactPage)



export default ConnectedContactPage



// Styles etc go here
////////////**********************/////////////////////////////////////////////////



const topSection = css`
padding:100px 0;
`

const greenSection = css`
  position: relative;
  padding:100px 0;
  background:#00f090;
  color:#fff;
  h2 {
    font-family: 'UniversLTStd-Bold';
    line-height:1.2;
    text-align:center;
  }
`
const Button = styled.button`
 background-color:#fff;
 border-radius: 10px;
 -webkit-border-radius: 10px;
 cursor:pointer;
 padding:6px 10px;
 outline:0;
 border:1px solid #1b1280;
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

export const contactQuery = graphql`
  query {
    file(relativePath: { eq: "envelope.png" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
