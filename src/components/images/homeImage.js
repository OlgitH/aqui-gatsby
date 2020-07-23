import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */



const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "digital.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img fixed={data.placeholderImage.childImageSharp.fixed}
      style={{
        margin: "0",
        position: "absolute",
        top: "50%",
        left: "-50px",
        transform: "translateY(-50%)"
      }}
    />
  )
}

export default Image
