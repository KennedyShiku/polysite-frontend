// src/pages/Jars.jsx
import jar1 from '../assets/images/product3.jpg';
import jar2 from '../assets/images/product2.jpg';
import jar3 from '../assets/images/gallery3.jpg';

const Jars = () => {
  return (
    <section className="products-section section-content" id="jars">
      <h2 className="section-title" data-aos="fade-up">Jars</h2>
      <p className="text" data-aos="fade-up" data-aos-delay="200">
        Explore our selection of high-quality plastic jars suitable for a wide range of industries.
      </p>

      <div className="products-grid">
        <div className="product-card" data-aos="fade-up" data-aos-delay="300">
          <img src={jar1} alt="Jar 1" className="product-image" />
          <h3 className="product-title">Flat Lid Jar</h3>
          <p className="product-desc">500ml • Ø85mm x 100mm • Ksh 18.50</p>
        </div>

        <div className="product-card" data-aos="fade-up" data-aos-delay="400">
          <img src={jar2} alt="Jar 2" className="product-image" />
          <h3 className="product-title">Straight Wall Jar</h3>
          <p className="product-desc">750ml • Ø90mm x 120mm • Ksh 22.00</p>
        </div>

        <div className="product-card" data-aos="fade-up" data-aos-delay="500">
          <img src={jar3} alt="Jar 3" className="product-image" />
          <h3 className="product-title">Mini Cosmetic Jar</h3>
          <p className="product-desc">150ml • Ø60mm x 60mm • Ksh 12.00</p>
        </div>
      </div>
    </section>
  );
};

export default Jars;
