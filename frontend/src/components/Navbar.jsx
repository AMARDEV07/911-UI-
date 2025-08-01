import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <header className='header'>
      <h1>Liuxu Auto</h1>

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
    </header>
  );
};

export default Navbar;
