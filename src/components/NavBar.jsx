import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    document.body.classList.toggle('show-mobile-menu');
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    document.body.classList.remove('show-mobile-menu');
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar section-content">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <h2 className="logo-text">Polysite</h2>
        </Link>

        <button
          id="menu-close-button"
          className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}
          onClick={toggleMenu}
        ></button>

        <ul className="nav-menu">
          <li className="nav-items"><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
          <li className="nav-items"><Link to="/about" className="nav-link" onClick={closeMenu}>About</Link></li>
          <li className="nav-items"><Link to="/products" className="nav-link" onClick={closeMenu}>Products</Link></li>
          <li className="nav-items"><Link to="/testimonials" className="nav-link" onClick={closeMenu}>Testimonials</Link></li>
          <li className="nav-items"><Link to="/gallery" className="nav-link" onClick={closeMenu}>Gallery</Link></li>
          <li className="nav-items"><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
          <li className="nav-items"><Link to="/downloads" className="nav-link" onClick={closeMenu}>Downloads</Link></li>
          <li className="nav-items"><Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link></li>
          <li className="nav-items"><Link to="/sitemap" className="nav-link" onClick={closeMenu}>Sitemap</Link></li>
          <li className="nav-items"><Link to="/queries" className="nav-link" onClick={closeMenu}>Queries</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
