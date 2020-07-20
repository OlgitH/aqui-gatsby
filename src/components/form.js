import React, { useState, useRef }  from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import Name from "./form-name"
import FormMessage from "./form-message"
import Email from "./form-email"
import Confirm from "./form-confirm"
import Success from "./form-success"
import { css } from "@emotion/core"
import styled from '@emotion/styled'
import posed, {PoseGroup} from "react-pose"

import Close from "../images/close-icon.png"

const Container = posed.div({
  enter: {
    x: 0,
    opacity:1,
    transition: { duration: 300 }
  },
  exit: {
    x: 100,
    opacity:0,
    transition: { duration: 300 }
  },
})



const containerStyle = css`
  position: fixed;
  /*background-color: rgba(255,255,255,0.98);*/
  background-color: #4775d1;
  top: 0;
  right:0;
  width:40%;
  @media (max-width: 1024px) {
    width:60%;
  }
  @media (max-width: 600px) {
    width:90%;
  }
  height:100vh;
  padding:4rem;
  -webkit-box-shadow: -4px -2px 5px -4px rgba(204,204,204,1);
  -moz-box-shadow: -4px -2px 5px -4px rgba(204,204,204,1);
  box-shadow: -4px -2px 5px -4px rgba(204,204,204,1);
`
const innerStyle = css`
  background-color:transparent;
  margin:0 auto;
  position:relative;
`

const formStyle = css``

const CloseBar= styled.div`
position:relative;
width:100%;
img.close-icon {
  position:absolute;
  left:0;
  top:-40px;
}
`



const Form = ({ children, closeForm, isOpen }) => {

  return (

    <PoseGroup>
        {isOpen &&
          <Container key="slideIn" css={containerStyle} >
            <div className="form-inner"  css={innerStyle}>
              <CloseBar>
                <img className="close-icon" onClick={closeForm} src={Close} width="20" style={{cursor:'pointer'}}/>
              </CloseBar>
              <h3>Please fill out the form to leave a message</h3>

                <form
                  css={formStyle}
                  encType="multipart/form-data"
                  name="contact"
                  method="post"
                  action="http://localhost:3000/contact"
                >

                    <FormComponents closeForm={closeForm}/>

                </form>
            </div>
          </Container>
        }
      </PoseGroup>


  )

}

class FormComponents extends React.Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1,
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1,
    })
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value,
    })
  }

  render() {
    const { step } = this.state
    const { firstName, lastName, email, message, phone } = this.state
    const values = { firstName, lastName, email, message, phone }


      switch (step) {
          case 1:
            return (
              <Name
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            )

          case 2:
            return (
              <Email
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            )

          case 3:
            return (
              <FormMessage
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            )


          case 4:
            return (
              <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
              />
            )

          case 5:
            return <Success closeForm={this.props.closeForm}/>

          default:
            console.log("This is a multi-step form built with React.")
        }

    }

}

export default Form
