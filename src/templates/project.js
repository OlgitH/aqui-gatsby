import React from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Back from "../images/arrow-back.png"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const CustomSection = styled.section`
  position: relative;
  padding:100px 0;
`

export default function Template({ data }) {
  const project = data.contentfulProject // data.markdownRemark holds your post data
  return (
    <Layout fixed="true">
      <SEO title="About" />

      <CustomSection>
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
      </CustomSection>

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
              <div style={{position:'fixed', top:'100px', right:'0', background:'#ccc', borderRadius:'100%'}}>
                <Link to="/work/">
                  <img src={Back} width="10px"/>
                  <span style={{display:'block'}}>
                    Back to projects
                  </span>


                </Link>
              </div>
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
