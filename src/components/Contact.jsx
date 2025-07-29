const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Us</h2>
      <div className="section-content">
        <ul className="contact-info-list">
          <li className="contact-info">
            <i className="fa-solid fa-location-crosshairs"></i>
            <p>123 Industrial Area, Manufacturing</p>
          </li>
          <li className="contact-info">
            <i className="fa-regular fa-envelope"></i>
            <p>info@polysite.com</p>
          </li>
          <li className="contact-info">
            <i className="fa-solid fa-phone"></i>
            <p>+254 723 456-789</p>
          </li>
          <li className="contact-info">
            <i className="fa-regular fa-clock"></i>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          </li>
          <li className="contact-info">
            <i className="fa-regular fa-clock"></i>
            <p>Saturday: 10:00 AM - 3.00 PM</p>
          </li>
          <li className="contact-info">
            <i className="fa-regular fa-clock"></i>
            <p>Sunday: Closed</p>
          </li>
          <li className="contact-info">
            <i className="fa-solid fa-globe"></i>
            <p>www.polysite.com</p>
          </li>
        </ul>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your name"
            className="form-input"
            required
          />
          <input
            type="email"
            placeholder="Your email"
            className="form-input"
            required
          />
          <textarea
            placeholder="Your message"
            className="form-input"
            required
          />
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
        <div className="map-container" data-aos="fade-up" data-aos-delay="500">
          <iframe
            title="PolySite Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.244062347104!2d36.8219468!3d-1.2920654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4368f2cb5%3A0xb76911c172174b04!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1620752076967!5m2!1sen!2ske"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
