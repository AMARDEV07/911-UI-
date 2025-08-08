
import CarVideo from "../assets/video/The new Porsche 911 _ Iconic to the core - Trim.mp4";


function Cadillac() {
  return (
    <div className="cardic-container">

      <div className="video-overlay1">
        <video className="cardic-video" autoPlay muted loop playsInline>
          <source src={CarVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        

        <div className="video-text">
          <h1>911 Carrera GTS</h1>
          <p>Precision. Power. Performance.</p>
          
        </div>
      </div>
    </div>
  )
}

export default Cadillac;
