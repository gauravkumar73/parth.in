import "./BannerSlider.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const BannerSlider = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left */}
          <div className="col-lg-6 hero-content">
            <h5>Hi, I'm</h5>

            <h1>
              <span>Gaurav</span> Kumar
            </h1>

            <h2>Full Stack Developer</h2>

            <p>
              I build responsive and user-friendly web applications
              with modern technologies.
            </p>

            <div className="hero-btn">
              <button className="btn btn-primary">
                View My Work
              </button>

              <button className="btn btn-outline-light">
                Contact Me
              </button>
            </div>

            <div className="social-icons">
              <a href="#"><FaGithub /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>

          </div>

          {/* Right */}
          <div className="col-lg-6 text-center">

            <div className="hero-image">

              <div className="circle"></div>

              <img
                src="https://ik.imagekit.io/0fw9yuy2p/111111111111111.png?updatedAt=1782877138285"
                alt="Gaurav"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BannerSlider;