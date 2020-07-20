import { Link } from "gatsby"
import React from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import { css } from "@emotion/core"
import ArrowBack from "../images/arrow-back.png"
import Arrow from "../images/arrow.png"
import SimpleReactValidator from 'simple-react-validator';
import styled from "@emotion/styled"

const InputGroup = styled.div`
margin:10px 0;

input {
  margin-left:10px;
}
`


export default class FormMessage extends React.Component {

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
        Please leave a message.<br/>
        <textarea
          type="text"
          name="message"
          value={values.message}
          onChange={handleChange("message")}
          style={{width:'400px',height:'260px'}}
        />
      {this.validator.message('message', values.message, 'required')}
      </label>
    </InputGroup>

      <img onClick={this.continue} src={Arrow} width="20" style={{cursor:'pointer'}}/>

      </>

    )
  }
}
