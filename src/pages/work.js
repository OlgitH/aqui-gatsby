import React, { useEffect } from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"

import Layout from "../components/layout"
import Projects from "../components/projects"
import SEO from "../components/seo"

import styled from "@emotion/styled"

const CustomSection = styled.section`
  position: relative;
  height:100px;
  background:blue;
  color:#fff;
`


const WorkPage = () => {
  useEffect(() => {})

  return (
    <Layout>
      <SEO title="Work" />

        <CustomSection>

        </CustomSection>

      <Projects />


    </Layout>
  )
}

export default WorkPage
