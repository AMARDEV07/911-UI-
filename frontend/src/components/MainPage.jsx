import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SpeedImg from "../assets/images/speedster-seeklogo.png";

import CardilliacF1 from "../assets/video/Cadillac Formula 1™ Team Announcement _ Cadillac.mp4";

function MainPage() {
  const h1Ref = useRef(null); // For image
  const h2Ref = useRef(null); // For heading





  useEffect(() => {


    // Animate image
    gsap.fromTo(
      h1Ref.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.3 }
    );

    // Animate heading
    gsap.fromTo(
      h2Ref.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.6 }
    );


  }, []);




  return (

    <div className="MainPage">
      
      {/* Video Background */}
      <video className="background-video" autoPlay muted loop playsInline>
        <source src={CardilliacF1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content overlay */}
      <div className="content-overlay">
        <div>
          <img
            ref={h1Ref}
            src={SpeedImg}
            alt="Speedster Logo"
            className="speed-img"
          />
        </div>

        <h1 ref={h2Ref}>
          Pushing the limits, feeling <br /> the rush
        </h1>
      </div>
    </div>
  );
}

export default MainPage;
