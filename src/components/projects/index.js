import { useStaticQuery, Link } from "gatsby"
import React from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import Img from "gatsby-image"
import posed from "react-pose"
import { css } from "@emotion/core"
import WaveBottom from "../../images/bg/work-wave-bottom.svg"


const CustomSection = posed.div({
  enter: { opacity: 1, staggerChildren: 50, staggerDirection: 1 },
  exit: { opacity: 0 },
})



const GridItem = posed.div({
  enter: { x: 0, opacity: 1, delayChildren: 200, staggerChildren: 50 },
  exit: { x: -100, opacity: 0 },
})

const Projects = () => {
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

  return (

    <div style={{background:`url(${WaveBottom})`, backgroundSize:'contain', backgroundRepeat:'no-repeat',backgroundRepeat:'no-repeat', backgroundPosition:'top'}}>
        <CustomSection initialPose="exit" pose="enter" >
          <div className="container">
            <div className="row" style={{ margin: "-8px" }}>
              {projects.map((project, i) => (
                <div className="col-6 col-md-3 px-0" key={i}>
                  <GridItem
                    initialPose="exit"
                    pose="enter"
                    style={{ padding: "8px" }}
                  > <Link to={`../projects/${project.node.slug}`}>
                      <Img fluid={project.node.featureImage.fluid} />
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
