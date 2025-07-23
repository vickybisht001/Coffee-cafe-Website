
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="ft-items">
        <div className="ft-item">
          <div className="ft-logo">
            <h2>Bisht Cafe</h2>
            <span>Restaurant</span>
          </div>
          <p className="my-4">
            © {currentYear} All rights reserved | This template is made with ❤️ by JB
          </p>
        </div>

        <div className="ft-item">
          <p>
            Welcome to Bisht Cafe, where culinary excellence meets a warm, inviting atmosphere.
            Located in the heart of New Delhi, we specialize in delicious Momos, Cream Burgers,
            Pasta, and Cold Coffee. Whether you're planning a romantic dinner or a family gathering,
            our elegant yet cozy setting provides the perfect backdrop for any occasion.
          </p>
        </div>

        <div className="ft-item">
          <div className="ft-add">
            <div className="ft-title">Address:</div>
            <div className="ft-content">Main Mohan Nagar, Ghaziabad</div>
          </div>
          <div className="ft-add my-2">
            <div className="ft-title">Email:</div>
            <div className="ft-content">
              <a href="mailto:BishtCafe2025@gmail.com">BishtCafe2025@gmail.com</a>
            </div>
          </div>
          <div className="ft-add my-2">
            <div className="ft-title">Phone:</div>
            <div className="ft-content">
              <a href="tel:+918287917781">+91 8287917781</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
