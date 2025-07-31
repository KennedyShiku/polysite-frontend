const Services = () => {
  return (
    <section className="services-section section-content" id="services">
      <h2 className="section-title" data-aos="fade-up">Our Services</h2>
      <p className="text" data-aos="fade-up" data-aos-delay="200">
        At PolySite, we offer more than just packaging.
      </p>

      <div className="services-grid">
        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
          <h3>Custom Bottle Design</h3>
          <p>Tailored designs to fit your brand and product identity.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="400">
          <h3>Bulk Production</h3>
          <p>High-capacity manufacturing to meet your supply demands on time.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="500">
          <h3>Label Printing</h3>
          <p>Premium-quality printing solutions to enhance your packaging appeal.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="600">
          <h3>Logistics & Delivery</h3>
          <p>Reliable transport across regions to get your bottles to your door.</p>
        </div>
      </div>

      
      <div className="downloads-section" data-aos="fade-up" style={{ marginTop: "3rem", textAlign: "center" }}>
        <h3 className="section-title">Download Resources</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          Download our detailed product specifications and catalogs:
        </p>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <li>
            <a href="/downloads/product-catalog.pdf" download className="button order-now">
              📄 Download Product Catalog (PDF)
            </a>
          </li>
          <li>
            <a href="/downloads/bottle-specs.doc" download className="button contact-us">
              📝 Download Bottle Specs (DOC)
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
