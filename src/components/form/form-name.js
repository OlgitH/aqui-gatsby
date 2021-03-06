import React from "react"
import Arrow from "../../images/arrow.png"
import ArrowBack from "../../images/arrow-back.png"
import SimpleReactValidator from 'simple-react-validator';
import "./form.css"
import { InputGroup } from './styleComponents'


export default class Name extends React.Component {

  constructor() {
    super();
    this.validator = new SimpleReactValidator();
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    this.refs.firstName.focus();
  }

  handleKeyPress(e) {
   // If enter key is pressed, focus next input field.
   if (e.keyCode === 13) {
     e.preventDefault();
     this.refs.lastName.focus();
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





  render() {
    const { values, handleChange } = this.props


    return (
      <>

        <InputGroup>
          <label>
            <span>First name</span>
            <input
              className="form-control"
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange("firstName")}
              ref="firstName"
              onKeyDown={this.handleKeyPress}
            />
          {this.validator.message('firstName', values.firstName, 'required|alpha')}
        </label>
        </InputGroup>

        <InputGroup>
          <label style={{marginTop:'20px',marginBottom:'20px'}}>
            <span>Last name</span>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange("lastName")}
              ref="lastName"
              onKeyDown={this.continueOnEnter}
            />
          {this.validator.message('lastName', values.lastName, 'required|alpha')}

          </label>
        </InputGroup>


        <img onClick={this.continue} src={Arrow} width="20" style={{cursor:'pointer'}}/>
      </>
    )
  }
}




// Styles etc go here
////////////**********************/////////////////////////////////////////////////
