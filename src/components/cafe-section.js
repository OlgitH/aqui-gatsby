import * as React from "react"
import gsap, {TweenMax, Linear} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackgroundImage from 'gatsby-background-image'
import { css } from "@emotion/core"
import { StaticQuery, graphql } from "gatsby"

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

class CafeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.container = null;
    this.afterImage = null;
    this.trigger = null;

  }
  componentDidMount() {
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: this.trigger,
        start:'top top',
        end:'bottom -2200px',
        scrub: 1,
        pin: true,
      }
    });

    tl
    .fromTo(".beforeImage .inner", { autoAlpha: 0}, {autoAlpha: 1})
    .fromTo(".beforeImage", { scale: 1 }, {scale: 1.1 }, "<+0.1")
    .fromTo(".beforeImage", { scale: 1.1, xPercent: 0, x:0}, {scale: 1, xPercent: -100} )
    .fromTo(".afterImage", { xPercent: 100, x:0}, {xPercent: 0}, "<")
    .fromTo(".afterImage .inner", { autoAlpha: 0}, {autoAlpha: 1}, "<+0.4")




  }
  render() {
    return (
      <div  ref={div => (this.trigger = div)}>

      <StaticQuery
         query={graphql`
           query {
             image1: file(relativePath: { eq: "bg/chairs.jpg" }) {
               childImageSharp {
                 fluid(maxWidth: 1000) {
                   ...GatsbyImageSharpFluid_withWebp
                 }
               }
             },
             image2: file(relativePath: { eq: "bg/we-all-live-here.jpg" }) {
               childImageSharp {
                 fluid(maxWidth: 1000) {
                   ...GatsbyImageSharpFluid_withWebp
                 }
               }
             },
             image3: file(relativePath: { eq: "bg/gauss-bg.png" }) {
               childImageSharp {
                 fluid(maxWidth: 1000) {
                   ...GatsbyImageSharpFluid_withWebp
                 }
               }
             },
             image4: file(relativePath: { eq: "bg/gauss-bg-green.png" }) {
               childImageSharp {
                 fluid(maxWidth: 1000) {
                   ...GatsbyImageSharpFluid_withWebp
                 }
               }
             }
           }
         `}
         render={data => (
          <div className="comparisonSection" css={comparisonSection}>

              <BackgroundImage
              Tag="div"
              fluid={data.image1.childImageSharp.fluid}
              className="comparisonImage beforeImage"
              backgroundColor={`#4119ec`}
              >
                  <BackgroundImage
                  Tag="div"
                  fluid={data.image3.childImageSharp.fluid}
                  className="inner"
                  >
                  <h2>We are based in London. </h2>
                  </BackgroundImage>

              </BackgroundImage>

              <BackgroundImage
              Tag="div"
              fluid={data.image2.childImageSharp.fluid}
              className="comparisonImage afterImage"
              >

                  <BackgroundImage
                  Tag="div"
                  fluid={data.image4.childImageSharp.fluid}
                  className="inner"
                  >
                  <h2>But we interact and work together with people all around the world. </h2>
                  </BackgroundImage>

              </BackgroundImage>
          </div>

         )}
       />




      </div>

    )
  }
}

export default CafeComponent;


const comparisonSection = css`
overflow-x:hidden;
position: relative;
height:100vh;

.comparisonImage {
  width: 100%;
  height: 100%;
  h2 {
    margin:0;
  }
}
.inner {

  width:760px;
  height:340px;
  line-height: 340px;
  text-align:center;
  background-size:contain!important;
  position: absolute;
  padding:0 5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    width:340px;
    height:200px;
    line-height: 200px;
    padding:0 20px;
  }


  h2 {
     color:#fff;
     line-height: 1.5;
     display: inline-block;
     vertical-align: middle;
     @media (max-width: 768px) {
       font-size:1rem;
     }
    }

}

.beforeImage {
  position: absolute!important;
  z-index:1;
  width:100%;
  height:100%;
  overflow: hidden;
  top: 0;
}
.afterImage {
  position: absolute!important;
  z-index:2;
  width:100%;
  height:100%;
  overflow: hidden;
  top: 0;
}

`
