import React from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"

import Layout from "../components/layout"
import Form from "../components/form/form"
import Image from "../components/images/contactImage"
import SEO from "../components/seo"
import SplitText from "react-pose-text"
import styled from "@emotion/styled"

import { connect } from "react-redux"

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
    background-color: transparent;
    height: auto;
    overflow: hidden;
    padding: 10px;
    min-height:300px;
  }

  h2 {
    font-size: 4rem;
    padding-bottom:0;
    @media (max-width: 768px) {
      font-size: 3rem;
    }
    @media (max-width: 600px) {
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
const Button = styled.button`
 background-color:transparent;
 border:1px solid #222;
 border-radius: 10px;
 -webkit-border-radius: 10px;
 cursor:pointer;
 padding:6px 10px;
 outline:0;
 &:hover {
   background-color:#f6f6f6;

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


const ContactPage = ({formVisible, toggleForm}) => {




  return (
    <Layout>
      <SEO title="Oliver Berman - Contact" />

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                All great things start with a conversation. I’d love to hear
                from you if you have an interesting project.
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
                    Get in touch.
                  </SplitText>
                </h2>

                <Button
                  onClick={ toggleForm }
                >
                  Send a message
                </Button>
                {/*
                <img
                  src={Arrow}
                  onClick={() => setFormVisible(true)}
                  width="40"
                  style={{ display: "block", cursor: "pointer", }}
                />
                */}
              </div>
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
