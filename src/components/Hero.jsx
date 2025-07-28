import heroImage from '../assets/images/heroImage.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="section-content">
        <div className="hero-details">
          <h2 className="title" data-aos="fade-up">Best Polysite</h2>
          <h3 className="subtitle" data-aos="fade-up" data-aos-delay="300">Premium Bottle Manufacturing!</h3>
          <p className="description" data-aos="fade-up" data-aos-delay="400">
            Specializing in PET, PP and PC bottles for diverse industries.
          </p>
          <div className="button" data-aos="fade-up" data-aos-delay="500">
            <a href="#" className="button order-now">Order Now</a>
            <a href="#contact" className="button contact-us">Contact Us</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={heroImage} alt="Hero" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
