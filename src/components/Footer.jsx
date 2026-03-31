import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-col">
          <h3>About us</h3>
          <p>
            Parth is an Information Technology Company which provides services
            in Web Designing, Web Development, Graphic Designing, E-commerce Website
            Development, SEO, Digital Marketing, Mobile Apps Development and more.
          </p>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/career">Career</Link></li>
          </ul>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Reach us</h3>
          <p>Noida, Delhi, India</p>
          <p>📧 123@gmail.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;