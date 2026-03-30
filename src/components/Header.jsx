import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4">
      
      {/* Logo */}
    <Link to="/">
  <img src="/src/assets/logoo.png" alt="logo" className="logo-img" height={40} />
</Link>

      {/* Mobile Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menu */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
          
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Home</Link>
          </li>

          {/* Dropdown */}
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle text-white"
              role="button"
              data-bs-toggle="dropdown"
            >
              Services
            </span>

            <ul className="dropdown-menu bg-dark">
              <li><Link className="dropdown-item text-white" to="/web-design">Web Designing</Link></li>
              <li><Link className="dropdown-item text-white" to="/web-development">Web Development</Link></li>
              <li><Link className="dropdown-item text-white" to="/web-hosting">Web Hosting</Link></li>
              <li><Link className="dropdown-item text-white" to="/graphic-design">Graphic Designing</Link></li>
              <li><Link className="dropdown-item text-white" to="/mobile-app">Mobile App</Link></li>
              <li><Link className="dropdown-item text-white" to="/digital-marketing">Digital Marketing</Link></li>
              <li><Link className="dropdown-item text-white" to="/payment-gateway">Payment Gateway</Link></li>
              <li><Link className="dropdown-item text-white" to="/ecommerce">Ecommerce</Link></li>
              <li><Link className="dropdown-item text-white" to="/seo">SEO</Link></li>
              <li><Link className="dropdown-item text-white" to="/consultation">Consultation</Link></li>
            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact">Contact</Link>
          </li>

          {/* Button */}
          <li className="nav-item">
            <button className="btn btn-success rounded-pill px-3">
              Get Quote →
            </button>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Header;