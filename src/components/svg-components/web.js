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
    TweenMax.set("#path5", {
      rotation:0.01,
      z:0.01,
      transformOrigin:"50% 50%",

    });
    TweenMax.to('#path5', 15, {
        rotation:"+=360",
        repeat:-1,
        ease: Linear.easeNone
    });
    tl
    .fromTo("#web_container", { autoAlpha:0, yPercent: 100, y:0}, {autoAlpha:1, yPercent: 0}, "-=0.8")
    .fromTo("#path1", { xPercent: 100, x: 0, autoAlpha:0}, {xPercent: 0, autoAlpha:1})
    .fromTo("#path2", { xPercent: 100, x: 0, autoAlpha:0}, {xPercent: 0, autoAlpha:1}, "<+0.1")
    .fromTo("#path3", { xPercent: 100, x: 0, autoAlpha:0}, {xPercent: 0, autoAlpha:1}, "<+0.1")
    .fromTo("#web_text", { autoAlpha:0}, {autoAlpha:1}, "<")
    .fromTo("#path4", { xPercent: 100, x: 0, autoAlpha:0}, {xPercent: 0, autoAlpha:1}, "<+0.1")
    .fromTo("#path5", { xPercent: 100, x: 0, autoAlpha:0}, {xPercent: 0, autoAlpha:1}, "<+0.1")



  }
  render() {
    return (
      <div>

          <svg
            {...this.props}
            ref={svg => (this.trigger = svg)}
          >
            <style>
              {
                ".web__st1{fill:none;stroke:#fff;stroke-miterlimit:10}.web__st2{fill:#fff}.web__st3{font-family:&apos;ClarendonWide-Medium&apos;}.web__st4{font-size:26.9586px}"
              }
            </style>
            <path fill="#1b1280" d="M0 0h829v733H0z" id="web_container"/>
            <path
              className="web__st1"
              id="path1"
              d="M238.5 306.5s2.3-86.8 61.2-177.7c62.3-96.1 203.3-96.1 265.6 0 58.9 90.9 61.2 177.7 61.2 177.7"
            />
            <path
              id="path2"
              className="web__st1"
              d="M470 134s81.1 2.1 168.7 55.5c103.9 63.3 103.9 213.6 0 277C551.1 519.9 470 522 470 522"
            />
            <path
              id="path3"
              className="web__st1"
              d="M645.3 377.6S639.8 588.2 432.5 711C225.2 588.2 219.7 377.6 219.7 377.6"
            />
            <path
              id="path4"
              className="web__st1"
              d="M376.9 540.8S205 536.3 81.2 382.6c-25.6-31.9-25.6-77.2 0-109.1C205 119.7 376.9 115.2 376.9 115.2"
            />
            <path
              id="path5"
              className="web__st2"
              d="M451.5 22.7c36.7 0 71.2 9.8 105.4 30 48.5 28.5 83.9 73.7 105.3 134.4 17.3 49.3 25.2 107.6 23.3 173.4-3.2 115.9-33.8 199.9-90.8 249.5-47.5 41.4-103.5 50.1-142.1 50.1-25.7 0-43.2-3.9-43.4-4-.8-.2-80.5-17.7-155.3-66.7-43.9-28.8-77.4-62.6-99.8-100.6-27.9-47.4-38.3-101.5-30.9-160.7C128 289.7 139 253 155.9 219c17.1-34.4 39.8-65.2 67.5-91.7C260.6 91.8 306.5 63 360 41.7c27.3-10.9 52.7-17 77.8-18.6 4.6-.3 9.2-.4 13.7-.4m0-1c-4.6 0-9.1.2-13.7.5-25.7 1.7-51.7 8.2-78.1 18.7-50.3 20-97.7 48.4-136.9 85.8-56.1 53.6-90.8 124.5-100.5 201.4-32.8 260.4 286.6 329 286.6 329s17.5 4 43.6 4c76.3 0 226.5-34 234-300.6 3.2-114.5-22.6-246.1-129.1-308.7-35.1-20.7-70.3-30.1-105.9-30.1z"
            />
            <text id="web_text" transform="translate(337.879 354.654)" style={{fontFamily:'ClarendonWide-Medium'}}>
              <tspan x={0} y={0} className="web__st2 web__st3 web__st4">
                {"Web sites "}
              </tspan>
              <tspan
                x={26.6}
                y={32.4}
                className="web__st2 web__st3 web__st4"
              >
                {"& apps"}
              </tspan>
            </text>
          </svg>

      </div>

    )
  }
}

export default SvgComponent;
