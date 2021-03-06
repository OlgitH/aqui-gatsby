import { Link } from "gatsby"
import React from "react"
import "./form.css"

export default class Success extends React.Component {
  render() {
    return (
      <div>
        <h3>Success. Your message has been sent. I will try to get back to you as soon as possible.</h3>
        <Link to="/contact/" onClick={this.props.closeForm}>Close</Link>
    </div>
    )
  }
}
