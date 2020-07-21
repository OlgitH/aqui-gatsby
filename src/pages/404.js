import React, { useEffect } from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap-grid.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"



const NotFoundPage = () => {

  return (
    <Layout>
      <SEO title="Page Not Found" />

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                Dayum, page not found
              </p>
            </div>
          </div>
        </div>
      </section>


    </Layout>
  )
}

export default NotFoundPage
