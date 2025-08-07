

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h1 className="footer-heading">WANNA TALK WITH US?</h1>

        <div className="footer-input-group">
          <div className="input-div">
            <input
              type="text"
              placeholder="Your message..."
              className="footer-input"
            />
            <button className="footer-button">Send</button>
          </div>

          <div className="footer-links">
            <span>a</span>
             <span>a</span>
              <span>a</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-info">Privacy Policy</span>
          <span className="footer-info">Copyright ©2025 Amardev07</span>
          <span className="footer-info">Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
