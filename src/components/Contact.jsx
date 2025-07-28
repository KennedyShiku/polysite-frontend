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
          <input type="text" placeholder="Your name" className="form-input" required />
          <input type="email" placeholder="Your email" className="form-input" required />
          <textarea placeholder="Your message" className="form-input" required />
          <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
