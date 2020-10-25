import React from "react"
import Layout from "../components/layout"
import Form from "../components/form/form"
import SEO from "../components/seo"
import SplitText from "react-pose-text"
import { connect } from "react-redux"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Wave from "../images/bg/contact-wave.svg"


const ContactPage = ({formVisible, toggleForm}) => {


  return (
    <Layout blueText="true">
      <SEO title="Contact" />

        <CustomSection>
        <div css={waveContainer}></div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-10">
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
      </CustomSection>



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




const CustomSection = styled.section`
  position: relative;
  padding:40vh 0;
  background:#00f090;
  color:#fff;
  h2 {
    font-family: 'UniversLTStd-Bold';
  }
`
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

const waveContainer = css`
background: url(${Wave});
background-size:cover;
background-repeat:no-repeat;
background-position:0 -200px;
position:absolute;
top:0;
width:100%;
height:460px;
`


const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    x: 0,
    delay: ({ charIndex }) => charIndex * 30,
  },
}
