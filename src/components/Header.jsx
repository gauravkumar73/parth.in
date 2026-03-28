import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
function Header() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="header">
      
      {/* Logo */}
      <div className="logo">
        Figmanet
      </div>

      {/* Menu */}
      <nav className="nav">
        <Link to="/">Home</Link>

        {/* Services Dropdown */}
        <div 
          className="dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <span>Services ▾</span>

          {dropdown && (
            <div className="dropdown-menu">
  <Link to="/web-design">Web Designing</Link>
  <Link to="/web-development">Web Development</Link>
  <Link to="/web-hosting">Web Hosting</Link>
  <Link to="/graphic-design">Graphic Designing</Link>
  <Link to="/mobile-app">Mobile App Development</Link>
  <Link to="/digital-marketing">Digital Marketing</Link>
  <Link to="/payment-gateway">Payment Gateway</Link>
  <Link to="/ecommerce">Ecommerce</Link>
  <Link to="/seo">SEO</Link>
  <Link to="/consultation">Consultation</Link>
</div>
          )}
        </div>

        <Link to="/About">About</Link>
        <Link to="/contact">Contact</Link>

        {/* Button */}
        <button className="quote-btn">Get Quote →</button>
      </nav>

    </header>
  );
}

export default Header;













