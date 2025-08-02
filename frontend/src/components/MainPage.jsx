import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpeedImg from "../assets/images/speedster-seeklogo.png";
import CardilliacF1 from "../assets/video/Cadillac Formula 1™ Team Announcement _ Cadillac.mp4";

gsap.registerPlugin(ScrollTrigger);

function MainPage() {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  const videoRef = useRef(null);//trigger video
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isVideoInView, setIsVideoInView] = useState(false);
  
  useEffect(() => {
    // Image animation
    gsap.fromTo(
      h1Ref.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.3 }
    );

    // Heading animation
    gsap.fromTo(
      h2Ref.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.6 }
    );

    const video = videoRef.current;
    if (video) {
      // Auto-enable audio on first user interaction
      const enableAudio = async () => {
        try {
          video.muted = false;
          await video.play();
          setAudioEnabled(true);
          console.log("✅ Audio enabled automatically!");
          


          // Remove listeners after audio is enabled

          document.removeEventListener('click', enableAudio);
          document.removeEventListener('touchstart', enableAudio);
          document.removeEventListener('scroll', enableAudio);
        } catch (error) {
          console.log("❌ Audio enable failed:", error);
        }
      };

      // Listen for any user interaction to enable audio
      document.addEventListener('click', enableAudio, { once: true });
      document.addEventListener('touchstart', enableAudio, { once: true });
      document.addEventListener('scroll', enableAudio, { once: true });




      // ScrollTrigger for automatic audio control video in viwe ma ana k await kro
      ScrollTrigger.create({
        trigger: video,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          console.log("🎬 Video entered viewport - Audio ON");
          setIsVideoInView(true);
          if (audioEnabled) {
            video.volume = 1;
          }
        },
        onLeave: () => {
          console.log("🔇 Video left viewport (up) - Audio OFF");
          setIsVideoInView(false);
          video.volume = 0;
        },
        onEnterBack: () => {
          console.log("🎵 Video re-entered viewport - Audio ON");
          setIsVideoInView(true);
          if (audioEnabled) {
            video.volume = 1;
          }
        },
        onLeaveBack: () => {
          console.log("🔇 Video left viewport (down) - Audio OFF");
          setIsVideoInView(false);
          video.volume = 0;
        }
      });
    }

    // Cleanup
   
  }, [audioEnabled]);

  // Remove manual toggle function since we don't need it anymore

  return (
    <div className="MainPage">


      {/* Video Background */}
      <video 
        ref={videoRef}
        className="background-video" 
        autoPlay 
        muted // Must start muted for autoplay
        loop 
        playsInline
      >
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