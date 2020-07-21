import React, { useEffect } from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap-grid.min.css"

import Layout from "../components/layout"
import Image from "../components/images/aboutImage"
import SEO from "../components/seo"
import SplitText from "react-pose-text"
import styled from "@emotion/styled"
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
                  <a href={project.projectLink} target="_blank">View website</a>
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

                        {/*console.log(item.fluid)*/}
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
