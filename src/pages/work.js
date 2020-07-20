import React, { useEffect } from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"

import Layout from "../components/layout"
import Projects from "../components/projects"
import SEO from "../components/seo"

const WorkPage = () => {
  useEffect(() => {})

  return (
    <Layout>
      <SEO title="Work" />

      <Projects />
    </Layout>
  )
}

export default WorkPage
