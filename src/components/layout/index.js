/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "../footer"
import Form from "../form/form"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { connect } from "react-redux"
import "./sass/layout.scss"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import { Helmet } from 'react-helmet'
import ContactList from "../contact"

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
 margin-bottom:10px;
 &:hover {
   background-color:#f6f6f6;
 }

`

const LO = ({ children, formVisible, toggleForm, fixed, blueText, bgCol }) => {


  return (
    <>
      <Helmet>
        <html className={fixed ? 'fixed' : ''} />
      </Helmet>

      <Header fixed={fixed} blueText={blueText} bgCol={bgCol}/>
      <div>
        <main>{children}</main>
        <Footer>
        <div className="row">
          <div className="col-md-6">
              <Button onClick={toggleForm}>Send message via website</Button>
              <ContactList />
          </div>
          <div className="col-md-6 align-self-end">
              <p style={{textAlign:'right'}}>Aqui Agency 2020</p>
          </div>
        </div>
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
