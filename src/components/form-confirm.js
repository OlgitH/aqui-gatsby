import { Link } from "gatsby"
import React from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import { css } from "@emotion/core"
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';

export default class Confirm extends React.Component {

  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
  }

  continue = e => {

    if (this.validator.allValid()) {
      // e.preventDefault();
      // console.log('valid');
      var bodyFormData = new FormData();
      bodyFormData.set('firstName', this.props.values.firstName);
      bodyFormData.set('lastName', this.props.values.lastName);
      bodyFormData.set('email', this.props.values.email);
      bodyFormData.set('phone', this.props.values.phone);
      bodyFormData.set('message', this.props.values.message);

      axios({
      method: 'post',
      url: 'http://localhost:3000/contact',
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data' }
      })
      .then(function (response) {
          //handle success
          console.log('success');
          console.log(response);
      })
      .catch(function (response) {
          //handle error
          console.log('error');
          console.log(response);
      });

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
        <p>{values.firstName + ' ' + values.lastName}</p>
        <p>{values.email}</p>
        <p>{values.phone}</p>
        <p>{values.message}</p>
        <button type="submit" onClick={this.continue}>Confirm details and submit</button>
      </>
    )
  }
}
