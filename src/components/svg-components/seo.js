import * as React from "react"
import gsap, {TweenMax, Linear} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

class SvgComponent extends React.Component {
  constructor(props) {
    super(props);
    this.container = null;
    this.trigger = null;

  }
  componentDidMount() {
    const tl = gsap.timeline({

      paused: true,
      scrollTrigger: {
        trigger: this.trigger,
        start:'-200px center',
        end:'center bottom',
        scrub: 1,
        // markers: true
      }
    });
    TweenMax.set("#seo_path1,#seo_path2", {
      rotation:0.01,
      z:0.01,
      transformOrigin:"50% 50%",

    });
    TweenMax.to('#seo_path1', 15, {
        rotation:"+=360",
        repeat:-1,
        ease: Linear.easeNone
    })
    TweenMax.to('#seo_path2', 25, {
        rotation:"+=360",
        repeat:-1,
        ease: Linear.easeNone
    })
    tl
    .fromTo("#seo_container", { autoAlpha:0, yPercent: 100, y:0}, {autoAlpha:1, yPercent: 0})
    .fromTo("#seo_path1", { xPercent: 100, x: 0, autoAlpha:0}, {xPercent: 0, autoAlpha:1})
    .fromTo("#seo_path2", { xPercent: 100, x: 0, autoAlpha:0}, {xPercent: 0, autoAlpha:1}, "<+0.1")
    .fromTo("#seo_path3", { xPercent: 100, x: 0, autoAlpha:0}, {xPercent: 0, autoAlpha:1}, "<+0.1")
    .fromTo("#seo_text", { autoAlpha:0}, {autoAlpha:1}, "<")


  }
  render() {
    return (
      <div>

          <svg
            {...this.props}
            ref={svg => (this.trigger = svg)}
          >
            <style>
              {".prefix__st4{fill:none;stroke:#1b1280;stroke-miterlimit:10}"}
            </style>
            <path fill="#00f090" d="M0 0h829v733H0z" id="seo_container"/>
            <text
              id="seo_text"
              transform="translate(384.476 354.654)"
              fontSize={26.959}
              fontFamily="ClarendonWide-Medium"
              fill="#1b1280"
            >
              {"SEO"}
            </text>
            <path
              id="seo_path1"
              className="prefix__st4"
              d="M163.9 376c-33-139 74-272.9 216.8-269 50.6 1.4 100 20.4 138.8 71.5 133 175 273 359 156 379s-421 115-468-25c-16.7-49.6-31.4-105.3-43.6-156.5z"
            />
            <path
              id="seo_path2"
              className="prefix__st4"
              d="M91.3 416.9c14.1-35.1 48.8-69.3 72.6-97.6 30.8-36.7 63.7-71.6 99-104.1 51.2-47.2 112-95.5 181.5-111 56.2-12.5 108.4 6.1 145.1 50.3 174 210 89 616.8-99.9 560-77.4-23.3-152.2-56.8-222.1-97.2-57.8-33.4-121.2-73.3-160.2-129-13.7-19.6-26-44.1-17.3-68.1.4-1.1.9-2.2 1.3-3.3z"
            />
            <path
              id="seo_path3"
              className="prefix__st4"
              d="M120.5 404.1S145.2 159 358.9 184.3s485.4 285.5 205.9 303.5c-279.4 18.1-418.5 46.4-444.3-83.7z"
            />
          </svg>

      </div>

    )
  }
}

export default SvgComponent;
