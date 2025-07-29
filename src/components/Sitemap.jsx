import { Link } from 'react-router-dom';

const Sitemap = () => {
  return (
    <section className="sitemap-section section-content" id="sitemap">
      <h2 className="section-title" data-aos="fade-up">Site Map</h2>
      <p className="text" data-aos="fade-up" data-aos-delay="200">
        Navigate through all our important pages below:
      </p>

      <ul className="sitemap-list" data-aos="fade-up" data-aos-delay="300">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/downloads">Downloads</Link></li>
        <li><Link to="/queries">Queries</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/sitemap">Sitemap</Link></li>
      </ul>
    </section>
  );
};

export default Sitemap;
