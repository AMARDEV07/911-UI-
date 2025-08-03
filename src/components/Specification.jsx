import { useRef, useEffect, useState } from "react";
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
  
  // State to control when CountUp should start
  const [startCounters, setStartCounters] = useState([false, false, false, false]);

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

    // ScrollTrigger for CountUp - using state array
    const refs = [countUpRef1, countUpRef2, countUpRef3, countUpRef4];
    //value,index
    refs.forEach((ref, index) => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 90%",
        once: true,
        onEnter: () => {
          //new state ma prev ko copy kr a rha h or prv ma false h  fir na new state m index ka hisb sa true hoga
          setStartCounters(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        },
      });
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="first-div">
      <h1 ref={headingRef}>Speedster Specification</h1>

      <div className="counterdiv">
        <div className="innerdiv" ref={countUpRef1}>
          <span>
            {startCounters[0] ? (
              <CountUp end={3354} duration={2} start={0} />
            ) : (
              "0"
            )}
          </span>
          <span>LB</span>
          <span>Curb Weight</span>
          <div className="Line"></div>
        </div>

        <div className="innerdiv" ref={countUpRef2}>
          <span>
            {startCounters[1] ? (
              <CountUp end={3000} duration={2} start={0} />
            ) : (
              "0"
            )}
          </span>
          <span>LB</span>
          <span>Curb Weight</span>
          <div className="Line"></div>
        </div>
      </div>

      <div className="counterdiv">
        <div className="innerdiv" ref={countUpRef3}>
          <span>
            {startCounters[2] ? (
              <CountUp end={2.5} decimals={1} duration={2} start={0} />
            ) : (
              "0.0"
            )}
          </span>
          <span>sec</span>
          <span>0–60 mph</span>
          <div className="Line"></div>
        </div>

        <div className="innerdiv" ref={countUpRef4}>
          <span>
            {startCounters[3] ? (
              <CountUp end={200} duration={2} start={0} />
            ) : (
              "0"
            )}
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