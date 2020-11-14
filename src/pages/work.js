import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { css } from "@emotion/core"



const WorkPage = () => {

  return (
    <Layout fixed="true" blueText="true" bgCol="#f6f6f6">


      <SEO title="Work" />

      <h1 style={{opacity:'0', height: 0, margin:'20px 0 0 0'}}>Our Work</h1>
      <div css={css`padding-bottom:80px;`}>
        <Projects />
      </div>

    </Layout>
  )
}

export default WorkPage


// Styles etc go here
////////////**********************/////////////////////////////////////////////////
