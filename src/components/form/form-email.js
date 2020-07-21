import React from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import Arrow from "../../images/arrow.png"
import ArrowBack from "../../images/arrow-back.png"
import SimpleReactValidator from 'simple-react-validator';
import styled from "@emotion/styled"
import "./form.css"

const InputGroup = styled.div`
margin:10px 0;
`

export default class Email extends React.Component {

  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
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
            value={values.email}
            onChange={handleChange("email")}
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
            value={values.phone}
            onChange={handleChange("phone")}
          />
        {this.validator.message('phone', values.phone, 'required|phone')}

        </label>
      </InputGroup>


      <img onClick={this.continue} src={Arrow} width="20" style={{cursor:'pointer'}}/>

    </>

    )
  }
}
