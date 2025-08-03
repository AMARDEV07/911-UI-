// CarsImagesCollection.jsx

import ImageCursorTrail from './ImageCursorTrail';

const images = [
 "https://images.unsplash.com/photo-1578478412827-8c0ec4fdde15?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1653749576883-5a9de7b5416a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1603575283711-63ed37bc0ce6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1672408141507-4faa0b102715?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1673082797698-0d03bd275c2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1702562760649-c6831e233107?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1627702734550-fbdef7ec088c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1673087378997-594f6d15de39?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1667302557616-19f21467fc9d?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1614162698829-831e2a7ca28c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1620227572047-b5636f08d4f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  

];

// Car-related catchy lines
const carLines = [
  "Unleash The Beast Within Every Drive",
  "Where Dreams Meet Horsepower",
  "Precision Engineering, Pure Passion",
  "Born To Race, Built To Last",
  "Luxury That Moves Your Soul",
  "Every Mile Tells A Story",
  "Speed Is Just The Beginning",
  "Crafted For Champions",
  "Drive The Extraordinary",
  "Performance Without Compromise"
];

function CarsImagesCollection() {
    // choose line randomly 
  const randomLine = carLines[Math.floor(Math.random() * carLines.length)];
  
 return (
    <ImageCursorTrail
      items={images}
      maxNumberOfImages={5}
      distance={25}
      imgClass="sm-size"
    >
      <div className="content-wrapper">
        <article>
          <h1 className="main-title">
            {randomLine}
          </h1>
          <p className="subtitle">
            Discover our premium collection of luxury supercars. Move your cursor to feel the power and witness automotive excellence in motion.
          </p>
          
          <div className="car-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Premium Cars</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Luxury Brands</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Service</span>
            </div>
          </div>
        </article>
      </div>
    </ImageCursorTrail>
  );
}

export default CarsImagesCollection;