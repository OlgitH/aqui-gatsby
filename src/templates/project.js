import React from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Back from "../images/arrow-back.png"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { jsx, css } from "@emotion/core"


export default function Template({ data }) {
  const project = data.contentfulProject
  return (
    <Layout fixed="true" blueText="true" bgCol="#f6f6f6">
      <SEO title={`Project - ${project.title}`} />

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
              <div css={backLink}>
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

// Styles etc go here
////////////**********************/////////////////////////////////////////////////


const CustomSection = styled.section`
  position: relative;
  padding:100px 0;
`

const backLink = css`
color:#8f8888;
font-family: 'UniversLTStd-Bold';
position:fixed;
top:calc(58.4667px + 10px);
@media (max-width: 768px) {
  top: calc(58.4667px + 6px);
  right: 6px;
  font-size:0.8rem;
  height:80px;
  width:80px;
  padding:10px 6px;
}
padding:40px 0 0 0;
right:10px;
border-radius:100%;
height:150px;
width:150px;
background: rgb(63,94,251);
background: -moz-radial-gradient(circle, rgba(63,94,251,0.7) 0%, rgba(63,94,251,0.6) 6%, rgba(63,94,251,0.3) 16%, rgba(63,94,251,0.1) 46% ,rgba(63,94,251,0) 66%);
background: -webkit-radial-gradient(circle, rgba(63,94,251,0.7) 0%, rgba(63,94,251,0.6) 6%, rgba(63,94,251,0.3) 16%, rgba(63,94,251,0.1) 46% ,rgba(63,94,251,0) 66%);
background: radial-gradient(circle, rgba(63,94,251,0.7) 0%, rgba(63,94,251,0.6) 6%, rgba(63,94,251,0.3) 16%, rgba(63,94,251,0.1) 46% ,rgba(63,94,251,0) 66%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3f5efb",endColorstr="#3f5efb",GradientType=1);
`
