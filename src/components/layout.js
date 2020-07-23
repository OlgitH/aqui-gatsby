/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import Form from "./form/form"

import { css } from "@emotion/core"
import { connect } from "react-redux"

import "./layout.css"

const linkStyle = css`
  text-decoration:underline;
  cursor:pointer;
`

const LO = ({ children, formVisible, toggleForm }) => {

  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <Footer>
          <a onClick={toggleForm} css={linkStyle}>Send a message</a>
          <p>or call...</p>
          <a href="tel:00447757067088" css={linkStyle}>+44 (0)7757 076088</a>
        </Footer>
        <Form closeForm={toggleForm} isOpen={formVisible} />
      </div>
    </>
  )
}

LO.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = ({ formVisible }) => {
return { formVisible }
}

const mapDispatchToProps = dispatch => {
  return { toggleForm: () => dispatch({ type: `RESET` }) }
}

const Layout = connect(mapStateToProps, mapDispatchToProps)(LO)


export default Layout
