import React from "react"
import Arrow from "../../images/arrow.png"
import ArrowBack from "../../images/arrow-back.png"
import SimpleReactValidator from 'simple-react-validator';
import styled from "@emotion/styled"
import "./form.css"
import { InputGroup } from './styleComponents'

export default class Email extends React.Component {

  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.handleKeyPress = this.handleKeyPress.bind(this);

  }

  handleKeyPress(e) {
   // If enter key is pressed, focus next input field.
   if (e.keyCode === 13) {
     e.preventDefault();
     this.refs.phone.focus();
   }
 }

 continueOnEnter = e => {
   if (e.keyCode === 13) {
       if (this.validator.allValid()) {
         e.preventDefault();
         // console.log('valid');

           e.preventDefault();
           this.props.nextStep()


       } else {
           this.validator.showMessages();
           // rerender to show messages for the first time
           // you can use the autoForceUpdate option to do this automatically`
           this.forceUpdate();
       }
   }
 }

  continue = e => {

    if (this.validator.allValid()) {
      e.preventDefault();
      // console.log('valid');
      this.props.nextStep()
    } else {
        this.validator.showMessages();
        // rerender to show messages for the first time
        // you can use the autoForceUpdate option to do this automatically`
        this.forceUpdate();
    }

  }

  back = e => {
    e.preventDefault();
    this.props.prevStep()
  }

  render() {
    const { values, handleChange } = this.props

    return (
    <>
      <img onClick={this.back} src={ArrowBack} width="20" style={{cursor:'pointer'}}/>

      <InputGroup>
        <label>
          <span>Email</span>
          <input
            type="text"
            name="email"
            ref="email"
            value={values.email}
            onChange={handleChange("email")}
            onKeyDown={this.handleKeyPress}
          />
        {this.validator.message('email', values.email, 'required|email')}

        </label>
      </InputGroup>

      <InputGroup>
        <label>
          <span>Phone</span>
          <input
            type="phone"
            name="phone"
            ref="phone"
            value={values.phone}
            onChange={handleChange("phone")}
            onKeyDown={this.continueOnEnter}
          />
        {this.validator.message('phone', values.phone, 'required|phone')}

        </label>
      </InputGroup>


      <img onClick={this.continue} src={Arrow} width="20" style={{cursor:'pointer'}}/>

    </>

    )
  }
}


// Styles etc go here
////////////**********************/////////////////////////////////////////////////
