import React from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"


export default function Template({ data }) {
  const project = data.contentfulProject // data.markdownRemark holds your post data
  return (
    <Layout>
      <SEO title="About" />

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">

              <h2>{project.title}</h2>

              <p>
                {project.description.description}
              </p>
              <p>
                {
                  project.projectLink &&
                  <a href={project.projectLink} target="_blank" rel="noreferrer">View website</a>
                }
              </p>

            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {
                      project.projectImages &&
                      project.projectImages.map((src, count) => {
                        return (
                          <Img fluid={src.fluid} alt={project.title + ' Image ' + (count+1)} style={{marginBottom:'15px'}}/>
                        )

                      })



              }
            </div>
          </div>
        </div>
      </section>


    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
          title
          description {
            description
          }
          projectImages {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          projectLink
    }
  }
`
