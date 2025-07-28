// import heroImage from '../assets/images/pic1.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="section-content">
        <div className="hero-details">
          <h2 className="title">Best Polysite</h2>
          <h3 className="subtitle">Premium Bottle Manufacturing!</h3>
          <p className="description">
            Specializing in PET, PP and PC bottles for diverse industries.
          </p>
          <div className="button">
            <a href="#" className="button order-now">Order Now</a>
            <a href="#contact" className="button contact-us">Contact Us</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src="#" alt="Hero" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
