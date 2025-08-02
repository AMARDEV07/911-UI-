import TierImage from "../assets/images/6410028a7250a372d38e95a5_service2.png";
import SetImage from "../assets/images/6410028ad43efd1baa7b830c_service3.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);



function Feature() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Animate all headings with class 'feature-heading'
      // in first we animated individual but in this method we apply animation by class


      gsap.fromTo(
        ".feature-heading",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.3, // Delay between multiple elements
          scrollTrigger: {
            trigger: ".feature-heading",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
            markers: false,
            invalidateOnRefresh: true,
          },
        }
      );

      // Animate all paragraphs with class 'feature-desc'
      gsap.fromTo(
        ".feature-desc",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
          stagger: 0.3, // Delay between multiple elements
          scrollTrigger: {
            trigger: ".feature-desc",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
            markers: false,
            invalidateOnRefresh: true,
          },
        }
      );



      // Initial Image Animation (Fade in with scale)
      gsap.fromTo(
        ".feature-image img",
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".feature-image img",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
            markers: false,
            invalidateOnRefresh: true,
          },
        }
      );

      // 🎯 PARALLAX EFFECT FOR IMAGES ONLY (Not the div)
      // Image moves inside its container, div stays in place

      gsap.utils.toArray(".feature-image img").forEach((img) => {
        gsap.fromTo(img, 
          {
            y: 50, // Start position (50px down)
          },
          {
            y: -50, // End position (50px up)
            ease: "none", // Linear movement for natural parallax
            scrollTrigger: {
              trigger: img.closest('.feature-inner'), // Use parent container as trigger
              start: "top bottom", // When section enters viewport from bottom
              end: "bottom top",   // When section exits viewport from top  
              scrub: 1.5, // Smooth parallax movement (1.5 = slower than scroll)
              markers: false, // Set to true for debugging
              invalidateOnRefresh: true,
            },
          }
        );
      });

    }, containerRef);

    

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, []);




  return (
    <div className="feature" ref={containerRef}>



      {/* First Block */}
      <div className="feature-inner">
        <div className="feature-text">
          <h1 className="feature-heading">Steering System</h1>
          <p className="feature-desc">
            Mit den eleganten Cover-Elementen aus Aluminium lassen sich ganz
            neue, einzigartige Farb- und Materialkombinationen über alle
            Zargenhöhen erzielen.
          </p>
        </div>
        <div className="feature-image">
          <img src={TierImage} alt="Wheel" />
        </div>
      </div>




      {/* Second Block */}
      <div className="feature-inner">
        <div className="feature-image">
          <img src={SetImage} alt="Brakes" />
        </div>
        <div className="feature-text">
          <h1 className="feature-heading">Braking System</h1>
          <p className="feature-desc">
            Advanced braking technology with precision control and enhanced
            safety features for optimal performance under all driving
            conditions.
          </p>
        </div>
      </div>




      {/* Third Block (Example) */}
      <div className="feature-inner">
        <div className="feature-text">
          <h1 className="feature-heading">Engine Performance</h1>
          <p className="feature-desc">
            High-performance engine with optimized fuel efficiency and reduced
            emissions delivering exceptional power and torque characteristics.
          </p>
        </div>
        <div className="feature-image">
          <img src={TierImage} alt="Engine" />
        </div>
      </div>
    </div>
  );
}

export default Feature;