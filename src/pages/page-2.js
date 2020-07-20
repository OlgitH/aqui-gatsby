import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Hi from the second page</h1>
            <p>Welcome to page 2</p>
            <Link to="/">Go back to the homepage</Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default SecondPage
