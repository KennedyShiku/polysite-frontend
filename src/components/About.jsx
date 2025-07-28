import aboutImage from '../assets/images/pic2.jpg';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="section-content">
        <div className="about-image-wrapper">
          <img src={aboutImage} alt="About" className="about-image" />
        </div>
        <div className="about-details">
          <h2 className="section-title">About Us</h2>
          <p className="text">
            Polysite is a leading manufacturer of high quality plastic bottles and containers. 
            With over 15 years of experience, we serve diverse industries including pharmaceuticals, 
            beverages, chemicals and cosmetics. Our state of the art facilities ensure consistent 
            quality and timely delivery for all your packaging needs.
          </p>
          <div className="social-link-list">
            <a href="#" className="social-link"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="social-link"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="social-link"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="social-link"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
