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
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { connect } from "react-redux"
import "./sass/layout.scss"

const linkStyle = css`
  text-decoration:underline;
  cursor:pointer;
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

const LO = ({ children, formVisible, toggleForm, fixed }) => {


  return (
    <>
      <Header fixed={fixed} />
      <div>
        <main>{children}</main>
        <Footer>
          <Button onClick={toggleForm}>Send message via website</Button>
          <p style={{fontSize:'0.8rem', marginBottom:0}}>or contact:</p>
            <a href="mailto:berman.oj@gmail.com" css={linkStyle} style={{fontSize:'0.8rem'}}>berman.oj@gmail.com</a><br/>
          <a href="tel:00447757067088" css={linkStyle} style={{fontSize:'0.8rem'}}>+44 (0)7757 076088</a>
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
