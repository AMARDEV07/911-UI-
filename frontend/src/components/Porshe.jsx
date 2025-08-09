
import porsheImg from "../assets/images/E969499404154DB79BAD58EF5CC8CFAB_82BBE0A2462E47C4B1DB34EA0B23B853_CZ25W12IX0010-911-carrera-gts-side (1).avif"; // simple name 

import porsheLogo from "../assets/images/911.b68f913.svg";

function Porshe() {
  return (
    <div className="porshe-wrapper">
      {/* Big 911 logo in background */}
      <img
        src={porsheLogo}
        alt="911 Logo"
        className="porshe-logo-bg"
      />

      {/* Car image in foreground */}
      <img
        src={porsheImg}
        alt="Porsche 911 Carrera GTS"
        className="porshe-car"
      />
      <h1 className="porshe">PORSCHE</h1>
    </div>
  );
}

export default Porshe;
