import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  const toggleMobileMenu = () => {
    //if mobile open if it is not open
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };




  return (
    <header className='header'>

      <h1>SPEEDSTER</h1>

      {/* Desktop Menu */}
      <div className='links'>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <button>Book Call</button>
      </div>



      {/* Mobile Menu Toggle */}
      <button 
        className='mobile-menu-toggle'
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>




      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <nav>
          <ul>
            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
            <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
          </ul>
        </nav>
        <button onClick={closeMobileMenu}>Book Call</button>
      </div>
    </header>
  );
};

export default Navbar;