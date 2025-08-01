
import CarVideo from "../assets/video/wallpaper-f1-4k-test-edit-amd-2160-ytshorts.savetube.me.mp4";


function Cadillac() {
  return (
    <div className="cardic-container">

      <div className="video-overlay1">
        <video className="cardic-video" autoPlay muted loop playsInline>
          <source src={CarVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        

        <div className="video-text">
          <h1>Cadillac Formula 1™ Team</h1>
          <p>Precision. Power. Performance.</p>
        </div>
      </div>
    </div>
  )
}

export default Cadillac;
