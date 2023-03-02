import { Link } from 'react-router-dom';
import { MdLocationPin, MdEmail, MdLocalPhone } from 'react-icons/md';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="information">
          <h3 className="footer-heading">Our Information</h3>
          <div className="information-para">
            <MdLocationPin className="footer-icon" />
            33 New Montgomery St. Ste 750 San <br />
            Francisco, CA, USA 94105
          </div>
          <div className="information-para">
            <MdEmail className="footer-icon" />
            foodoliv@exampledemo.com
          </div>
          <div className="information-para">
            <MdLocalPhone className="footer-icon" />
            (+92)012-345-6789
          </div>
          <div className="social-links"></div>
        </div>
        <div className="links-box">
          <h3 className="footer-heading">Quick Links</h3>
          <Link to="/" className="footer-links">
            › Contact
          </Link>
          <Link to="/" className="footer-links">
            › Shipping
          </Link>
          <Link to="/" className="footer-links">
            › Sitemap
          </Link>
          <Link to="/" className="footer-links">
            › FAQs
          </Link>
          <Link to="/" className="footer-links">
            › Support
          </Link>
        </div>
        <div className="company">
          <h3 className="footer-heading">Our Company</h3>
          <Link to="/" className="footer-links">
            › Search
          </Link>
          <Link to="/" className="footer-links">
            › Delivery Information
          </Link>
          <Link to="/" className="footer-links">
            › About Us
          </Link>
          <Link to="/" className="footer-links">
            › Privacy Policy
          </Link>
          <Link to="/" className="footer-links">
            › Terms And Conditions
          </Link>
        </div>
        <div className="service">
          <h3 className="footer-heading">Our Service</h3>
          <Link to="/" className="footer-links">
            › Search
          </Link>
          <Link to="/" className="footer-links">
            › Size Chart
          </Link>
          <Link to="/" className="footer-links">
            › FAQs
          </Link>
          <Link to="/" className="footer-links">
            › Terms And Conditions
          </Link>
          <Link to="/" className="footer-links">
            › Shipping
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023, Foodoliv - Fast Food Store Powered By Shopify</p>
      </div>
    </div>
  );
};

export default Footer;
