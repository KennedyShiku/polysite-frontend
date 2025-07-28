const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="section-content">
        <p className="copyright-text">© 2025 Polysite Shop</p>
        <div className="social-link-list">
          <a href="#" className="social-link"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" className="social-link"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className="social-link"><i className="fa-brands fa-twitter"></i></a>
          <a href="#" className="social-link"><i className="fa-brands fa-linkedin"></i></a>
        </div>

        <p className="policy-text">
          <a href="#" className="policy-link">Privacy policy</a>
          <span className="separator">.</span>
          <a href="#" className="policy-link">Refund policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
