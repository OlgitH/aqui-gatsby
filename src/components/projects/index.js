import { useStaticQuery, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import posed from "react-pose"
import WaveBottom from "../../images/bg/work-wave-bottom.svg"
import styled from "@emotion/styled"
import { jsx, css } from "@emotion/core"

const Projects = () => {

  // Get the project data in a variable

  const data = useStaticQuery(graphql`
    query queryProjects {
      allContentfulProject(sort: {fields: order}) {
        edges {
          node {
            title
            slug
            featureImage {
              fluid(maxWidth: 300) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allContentfulProject.edges

  const addHoverClass = (event) => {
    var el = event.target;
    el.classList.add('is-hovered')
  }

  const removeHoverClass = (event) => {
    var el = event.target;
    el.classList.remove('is-hovered')

  }

  return (

    <div >
        <CustomSection initialPose="exit" pose="enter" >


                <div className="container pt-4">
                  <div className="row" style={{ margin: "-8px" }}>
                    {projects.map((project, i) => (
                      <div className="col-6 col-md-3 px-0" key={i}>
                        <GridItem
                          initialPose="exit"
                          pose="enter"
                          css={gridItemStyles}
                          onMouseEnter={addHoverClass}
                          onMouseLeave={removeHoverClass}
                          className="grid-item"

                        > <Link to={`../projects/${project.node.slug}`}>
                            <Img fluid={project.node.featureImage.fluid} />
                            <div css={projectDetails}>
                            <h6>{project.node.title}</h6>
                            </div>
                          </Link>

                        </GridItem>
                      </div>
                    ))}
                  </div>
                </div>


        </CustomSection>
    </div>

  )
}

export default Projects



// Styles etc go here
////////////**********************/////////////////////////////////////////////////

const waveContainer = css`

padding-top:100px;

`

const gridItemStyles = css`
position:relative;
margin:8px;
`

const projectDetails = css`

  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:999;
  color:#1b1280;
  padding:15px;
  background:#00f090;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.25s linear;

  .grid-item:hover & {
    visibility: visible;
    opacity: 1;
  }

  h6 {
    margin:0;
    font-family:'UniversLTStd-Bold';
    font-size:1.2rem;
  }
`





const CustomSection = posed.div({
  enter: { opacity: 1, staggerChildren: 50, staggerDirection: 1 },
  exit: { opacity: 0 },
})



const GridItem = posed.div({
  enter: { x: 0, opacity: 1, delayChildren: 200, staggerChildren: 50 },
  exit: { x: -100, opacity: 0 },
})
