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
        // markers: true,
         stagger: 0.5
      }
    });
    TweenMax.set("#design_path2", {
      rotation:0.01,
      z:0.01,
      transformOrigin:"50% 50%",

    });
    TweenMax.to('#design_path2', 15, {
        rotation:"+=360",
        repeat:-1,
        ease: Linear.easeNone
    });
    tl
    .fromTo("#design_container", { autoAlpha:0, yPercent: 100, y:0}, {autoAlpha:1, yPercent: 0}, "+=0.4")
    .fromTo("#design_path1", { xPercent: 100, x: 0, autoAlpha:0}, {xPercent: 0, autoAlpha:1})
    .fromTo("#design_path2", { xPercent: 100, x: 0, autoAlpha:0}, {xPercent: 0, autoAlpha:1}, "<+0.1")
    .fromTo("#text", { autoAlpha:0}, {autoAlpha:1}, "<")
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
                ".design__st1{fill:none;stroke:#1b1280;stroke-miterlimit:10}.design__st2{fill:#1b1280}.design__st3{font-family:&apos;ClarendonWide-Medium&apos;}.design__st4{font-size:26.9586px}"
              }
             </style>
             <path fill="#aeedfc" d="M0 0h829v733H0z" id="design_container" />
             <path
             id="design_path1"
             className="design__st1"
               d="M537.9 513.8s-155.6 73.2-335.3-8.7c-37.2-17-57.6-57.5-49-97.5 41.6-193 193.2-274.1 193.2-274.1v-.2s73.5-34.5 175.7-26.1c121.2 10 188.7 144.3 124.3 247.5C592.5 441.7 521 480 521 480"
               fill="none"
               stroke="#1b1280"
               strokeMiterlimit={10}
             />
             <path
             id="design_path2"
               className="design__st2"
               d="M445.5 135c36.7 0 71.2 7.6 105.5 23.1 48.5 22 83.9 56.8 105.2 103.6 17.3 38 25.2 82.9 23.3 133.6-3.2 89.3-33.8 153.9-90.7 192.2-47.6 31.9-103.6 38.6-142.2 38.6-25.8 0-43.3-3-43.5-3.1-.8-.1-80.6-13.6-155.4-51.5-43.8-22.2-77.4-48.3-99.7-77.5-27.9-36.5-38.2-78.1-30.8-123.6 4.8-29.5 15.8-57.8 32.7-84 17.1-26.5 39.7-50.2 67.4-70.6 37.2-27.4 83.2-49.6 136.6-66 27.3-8.4 52.8-13.1 77.9-14.4 4.6-.3 9.2-.4 13.7-.4m0-1c-4.6 0-9.1.1-13.7.4-25.7 1.3-51.7 6.3-78.1 14.4-50.3 15.4-97.7 37.3-136.9 66.2-56.1 41.3-90.8 96-100.5 155.3C83.5 571.1 402.9 624 402.9 624s17.5 3.1 43.6 3.1c76.3 0 226.5-26.2 234-231.8 3.2-88.3-22.6-189.8-129.1-238.1-35.1-15.9-70.3-23.2-105.9-23.2z"
             />
             <text id="text" transform="translate(349.848 354.654)" style={{fontFamily:'ClarendonWide-Medium'}}>
               <tspan x={0} y={0} className="design__st2 design__st3 design__st4">
                 {"Graphic "}
               </tspan>
               <tspan
                 x={11.3}
                 y={32.4}
                 className="design__st2 design__st3 design__st4"
               >
                 {"Design"}
               </tspan>
             </text>
          </svg>

      </div>

    )
  }
}

export default SvgComponent;
