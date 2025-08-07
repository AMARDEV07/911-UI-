import React, { useState, useRef, useEffect } from 'react';


const Angle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [lastMouseX, setLastMouseX] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  const autoplayRef = useRef(null);





  // Configuration - Update this based on your images
  const totalImages = 35; // total images u can preview 
  const autoplaySpeed = 400; // milliseconds





//extrat images from public folder

  const getImageUrl = (index) => {
    return `/Car/img_0_0_${index + 1}.avif`;
  };






  // Autoplay functionality
  useEffect(() => {
    
    if (isAutoplay && !isDragging) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalImages);
      }, autoplaySpeed);
    } else {
      clearInterval(autoplayRef.current);
    }

    return () => clearInterval(autoplayRef.current);
  }, [isAutoplay, isDragging, autoplaySpeed, totalImages]);





  // Mouse handlers for dragging

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoplay(false);
    setLastMouseX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMouseX;
    const sensitivity = 5; // Adjust sensitivity

    if (Math.abs(deltaX) > sensitivity) {
      const direction = deltaX > 0 ? 1 : -1;
      setCurrentIndex((prev) => {
        let newIndex = prev + direction;
        if (newIndex < 0) newIndex = totalImages - 1;
        if (newIndex >= totalImages) newIndex = 0;
        return newIndex;
      });
      setLastMouseX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };





  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsAutoplay(false);
    setLastMouseX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.touches[0].clientX - lastMouseX;
    const sensitivity = 5;

    if (Math.abs(deltaX) > sensitivity) {
      const direction = deltaX > 0 ? 1 : -1;
      setCurrentIndex((prev) => {
        let newIndex = prev + direction;
        if (newIndex < 0) newIndex = totalImages - 1;
        if (newIndex >= totalImages) newIndex = 0;
        return newIndex;
      });
      setLastMouseX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Global mouse events
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, lastMouseX]);





  return (


    <div className="product-viewer">
      <h2 className="title">
        360° Product Viewer
      </h2>



      {/* //images conatiner  */}
      
      <div 
        ref={containerRef}
        className={`viewer-container ${isDragging ? 'dragging' : ''}`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >



        <img
          src={getImageUrl(currentIndex)}
          alt={`360° view frame ${currentIndex + 1}`}
          className="viewer-image"
          draggable={false}

          onLoad={() => {
            console.log('Image loaded:', currentIndex);
            setIsLoading(false);
          }}

          onError={(e) => {
            console.error('Image failed to load:', getImageUrl(currentIndex));
            console.error('Error details:', e);
            setIsLoading(false);
          }}
        />
        



        {/* Loading overlay - only show when actually loading */}
        {isLoading && (
          <div className="loading-overlay">
            <div className="loading-text">Loading...</div>
          </div>
        )}
      </div>





      {/* Controls */}
      <div className="controls">
        <div className="nav-buttons">
          <button
            onClick={() => setCurrentIndex(prev => prev === 0 ? totalImages - 1 : prev - 1)}
            className="nav-btn prev-btn"
          >
            ← Prev
          </button>
          <button
            onClick={() => setCurrentIndex(prev => (prev + 1) % totalImages)}
            className="nav-btn next-btn"
          >
            Next →
          </button>
        </div>

        <div className="autoplay-controls">
          <button
            onClick={() => setIsAutoplay(!isAutoplay)}
            className={`autoplay-btn ${isAutoplay ? 'active' : ''}`}
          >
            {isAutoplay ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>






      {/* Progress indicator */}
      <div className="progress-section">
        <div className="progress-info">
          <span>Frame {currentIndex + 1} of {totalImages}</span>
          <span>{Math.round((currentIndex / (totalImages - 1)) * 100)}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${(currentIndex / (totalImages - 1)) * 100}%` }}
          />
        </div>
      </div>





     
    </div>
  );
};

export default Angle;