import { Link } from 'react-router-dom';
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";

const Products = () => {
  return (
    <section className="menu-section" id="menu">
      <h2 className="section-title">Our Products</h2>
      <div className="section-content">
        <p className="text" style={{ textAlign: 'center', marginBottom: '30px' }}>
          Explore our full range of packaging products by category.
        </p>
        <ul className="menu-list">
          <li className="menu-item" data-aos="fade-up" data-aos-delay="100">
            <img
              src={product1}
              alt="Bottle Category"
              className="menu-image"
            />
            <h3 className="name">Bottles</h3>
            <p className="text">Explore our diverse range of PET and HDPE bottles for all industries.</p>
            <Link to="/products/bottles" className="button order-now">View Bottles</Link>
          </li>

          <li className="menu-item" data-aos="fade-up" data-aos-delay="200">
            <img
              src={product2}
              alt="Jar Category"
              className="menu-image"
            />
            <h3 className="name">Jars</h3>
            <p className="text">Discover high-quality jars ideal for cosmetics, food, and chemicals.</p>
            <Link to="/products/jars" className="button contact-us">View Jars</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Products;
