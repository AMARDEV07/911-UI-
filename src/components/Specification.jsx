import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

function Specification() {
  const headingRef = useRef(null);
  const countUpRef1 = useRef(null);
  const countUpRef2 = useRef(null);
  const countUpRef3 = useRef(null);
  const countUpRef4 = useRef(null);

  useEffect(() => {
    // GSAP Heading Animation
    gsap.fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // ScrollTrigger for CountUp
    [countUpRef1, countUpRef2, countUpRef3, countUpRef4].forEach((ref) => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 90%",
        once: true,
        onEnter: () => {
          ref.current?.start?.();
        },
      });
    });
  }, []);

  return (
    <div className="first-div">
      <h1 ref={headingRef}>Speedster Specification</h1>

      <div className="counterdiv">
        <div className="innerdiv">
          <span>
            <CountUp end={3354} duration={2} ref={countUpRef1} start={0} />
          </span>
          <span>LB</span>
          <span>Curb Weight</span>
          <div className="Line"></div>
        </div>

        <div className="innerdiv">
          <span>
            <CountUp end={3000} duration={2} ref={countUpRef2} start={0} />
          </span>
          <span>LB</span>
          <span>Curb Weight</span>
          <div className="Line"></div>
        </div>
      </div>

      <div className="counterdiv">
        <div className="innerdiv">
          <span>
            <CountUp end={2.5} decimals={1} duration={2} ref={countUpRef3} start={0} />
          </span>
          <span>sec</span>
          <span>0–60 mph</span>
          <div className="Line"></div>
        </div>

        <div className="innerdiv">
          <span>
            <CountUp end={200} duration={2} ref={countUpRef4} start={0} />
          </span>
          <span>mph</span>
          <span>Top Speed</span>
          <div className="Line"></div>
        </div>
      </div>
    </div>
  );
}

export default Specification;
