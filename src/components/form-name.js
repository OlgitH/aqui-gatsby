import React from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import Arrow from "../images/arrow.png"
import ArrowBack from "../images/arrow-back.png"
import SimpleReactValidator from 'simple-react-validator';
import styled from "@emotion/styled"



const InputGroup = styled.div`
margin:10px 0;

input {
  margin-left:10px;
}
`


export default class Name extends React.Component {

  constructor() {
    super();
    this.validator = new SimpleReactValidator();
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    this.refs.firstName.focus();
  }

  handleKeyPress(e, field) {
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



  render() {
    const { values, handleChange } = this.props


    return (
      <>

        <InputGroup>
          <label>
            First name
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
            Last name
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange("lastName")}
              ref="lastName"
            />
          {this.validator.message('lastName', values.lastName, 'required|alpha')}

          </label>
        </InputGroup>


        <img onClick={this.continue} src={Arrow} width="20" style={{cursor:'pointer'}}/>
      </>
    )
  }
}
