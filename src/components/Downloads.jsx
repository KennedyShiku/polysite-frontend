const Downloads = () => {
  return (
    <section className="menu-section" id="downloads">
      <h2 className="section-title">Downloads</h2>
      <div className="section-content" style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '30px' }}>
          Download our detailed product specifications and catalogs:
        </p>
        <ul style={listStyle}>
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

const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'center',
};

export default Downloads;
