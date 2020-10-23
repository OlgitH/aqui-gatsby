import React from "react"
import Layout from "../components/layout"
import Form from "../components/form/form"
import SEO from "../components/seo"
import SplitText from "react-pose-text"
import styled from "@emotion/styled"
import { connect } from "react-redux"



const ContactPage = ({formVisible, toggleForm}) => {


  return (
    <Layout>
      <SEO title="Oliver Berman - Contact" />

        <CustomSection>
        <div className="container">
          <div className="row">
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
  background:blue;
  color:#fff;
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

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    x: 0,
    delay: ({ charIndex }) => charIndex * 30,
  },
}
