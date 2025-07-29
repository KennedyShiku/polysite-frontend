// import { useState } from 'react';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     document.body.classList.toggle('show-mobile-menu');
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header>
//       <nav className="navbar section-content">
//         <a href="#" className="nav-logo">
//           <h2 className="logo-text">Polysite</h2>
//         </a>

//         <button
//           id="menu-close-button"
//           className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}
//           onClick={toggleMenu}
//         ></button>

//         <ul className="nav-menu">
//           <li className="nav-items"><a href="#" className="nav-link">Home</a></li>
//           <li className="nav-items"><a href="#about" className="nav-link">About</a></li>
//           <li className="nav-items"><a href="#menu" className="nav-link">Products</a></li>
//           <li className="nav-items"><a href="#testimonials" className="nav-link">Testimonials</a></li>
//           <li className="nav-items"><a href="#gallery" className="nav-link">Gallery</a></li>
//           <li className="nav-items"><a href="#contact" className="nav-link">Contact</a></li>
//           <li className="nav-items"><a href="#downloads" className="nav-link">Downloads</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    document.body.classList.toggle('show-mobile-menu');
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar section-content">
        <Link to="/" className="nav-logo">
          <h2 className="logo-text">Polysite</h2>
        </Link>

        <button
          id="menu-close-button"
          className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}
          onClick={toggleMenu}
        ></button>

        <ul className="nav-menu">
          <li className="nav-items"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-items"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-items"><Link to="/products" className="nav-link">Products</Link></li>
          <li className="nav-items"><Link to="/testimonials" className="nav-link">Testimonials</Link></li>
          <li className="nav-items"><Link to="/gallery" className="nav-link">Gallery</Link></li>
          <li className="nav-items"><Link to="/contact" className="nav-link">Contact</Link></li>
          <li className="nav-items"><Link to="/downloads" className="nav-link">Downloads</Link></li>
          <li className="nav-items"><Link to="/sitemap" className="nav-link">Sitemap</Link></li>
          <li className="nav-items"><Link to="/queries" className="nav-link">Queries</Link></li>
          <li className="nav-items"><Link to="/services" className="nav-link">Services</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
