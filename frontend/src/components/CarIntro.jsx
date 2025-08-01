import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CarIntro() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const containerRef = useRef(null);//for pralex trigger

  useEffect(() => {
    // Make sure elements exist before animating
    if (!headingRef.current || !paraRef.current || !containerRef.current) return;
    
    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    // Set initial states (important for GSAP)
    gsap.set(headingRef.current, { x: -200, opacity: 0 });
    gsap.set(paraRef.current, { x: 200, opacity: 0 });
    

    
    // Parallax Effect for the entire container
    gsap.to(containerRef.current, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true, // Smooth parallax effect
        markers: false,
      }
    });
    
    // Create a timeline for content animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", 
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
        markers: false,
        onToggle: self => console.log("Toggled:", self.isActive),
        onUpdate: self => console.log("Progress:", self.progress),
      }
    });

    // Add animations to timeline
    tl.to(headingRef.current, {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    })
    .to(paraRef.current, {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    }, "-=1");


    // Cleanup function
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (

    <div className="carIntro" ref={containerRef}>
      <div className="carIntro-text">
        <h1 ref={headingRef}>
          THE DRIVER <br /> DREAM
        </h1>
        <p ref={paraRef}>
          Introducing the latest addition to our lineup of high-performance vehicles: 
          the all-new sports car. This sleek and stylish car boasts a powerful engine 
          that delivers thrilling acceleration and impressive speed. Its aerodynamic 
          design and precision handling make it perfect for driving on winding roads 
          and taking tight turns with ease. The car's interior is just as impressive 
          as its exterior, with premium materials and state-of-the-art technology that 
          provide both comfort and convenience.
        </p>
        
      </div>
    </div>
  );
}

export default CarIntro;