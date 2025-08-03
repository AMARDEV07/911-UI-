// ImageCursorTrail.jsx
import React, { useState, useEffect, useRef } from 'react';


const ImageCursorTrail = ({ 

  items, 
  maxNumberOfImages = 5, 
  distance = 25, 
  imgClass = "sm-size", 
  className = "", 
  children 
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });//mouse effect
  const [isInsideContainer, setIsInsideContainer] = useState(false);//boundary chek
  const [imageTrail, setImageTrail] = useState([]);//setimages 
  const containerRef = useRef(null);//trigger container
  const lastImageTime = useRef(0);
  const imageCounter = useRef(0);
  const cursorRef = useRef(null);

  useEffect(() => {


    const handleMouseMove = (e) => {
      // Always update mouse position for smooth cursor
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (!containerRef.current) return;
      
      // Check if mouse is inside the container
      const rect = containerRef.current.getBoundingClientRect();
      const isInside = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      );
      
      setIsInsideContainer(isInside);
      
      if (!isInside) {
        return;
      }
      
      // Add new image to trail with throttling (only when inside)
      const now = Date.now();
      if (now - lastImageTime.current > 150) {
        const newImage = {
          id: imageCounter.current++,
          x: e.clientX,
          y: e.clientY,
          src: items[Math.floor(Math.random() * items.length)],
          opacity: 1,
          scale: 0.8 + Math.random() * 0.4,
          rotation: (Math.random() - 0.5) * 30
        };
        
        setImageTrail(prev => {
          const newTrail = [newImage, ...prev].slice(0, maxNumberOfImages);
          return newTrail;
        });
        
        lastImageTime.current = now;
      }
    };



//mouse leave 
    const handleMouseLeave = () => {
      // Clear trail when mouse leaves document
      setImageTrail([]);
      setIsInsideContainer(false);
    };




    // Add listeners to document for smooth tracking
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [items, maxNumberOfImages]);

  // Clear trail when leaving container
  useEffect(() => {
    if (!isInsideContainer) {
      const timer = setTimeout(() => {
        setImageTrail([]);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInsideContainer]);
  useEffect(() => {
    const interval = setInterval(() => {
      setImageTrail(prev => 
        prev.map((img, index) => ({
          ...img,
          opacity: Math.max(0, img.opacity - 0.025),
          scale: img.scale * 0.985,
          y: img.y + (index * 1.5)
        })).filter(img => img.opacity > 0.1)
      );
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`cursor-trail-container ${className}`}
    >
      {/* Trail Images */}
      {imageTrail.map((image, index) => (
        <img
          key={image.id}
          src={image.src}
          alt=""
          className={`trail-image ${imgClass}`}
          style={{
            left: image.x - distance,
            top: image.y - distance,
            opacity: image.opacity,
            transform: `scale(${image.scale}) rotate(${image.rotation}deg)`,
            zIndex: 40 - index
          }}
        />
      ))}

      {/* Custom Cursor - Only show when inside container */}
      {isInsideContainer && (
        <div
          className="custom-cursor"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            opacity: isInsideContainer ? 1 : 0,
            transition: 'opacity 0.2s ease'
          }}
        />
      )}
      
      {/* Content */}
      {children}
    </div>
  );
};

export default ImageCursorTrail;