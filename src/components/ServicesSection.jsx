import "./ServicesSection.css";

function ServicesSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6">
            <span className="sub-title">ABOUT ME</span>

            <h2>
              Passionate Full Stack Developer
            </h2>

            <p>
              I am a passionate Full Stack Developer with experience in
              HTML, CSS, JavaScript, Bootstrap, jQuery and React. I enjoy
              building modern, responsive and user-friendly websites that
              provide an excellent user experience.
            </p>

            <div className="skill-box">

              <div className="skill">
                <h5>HTML & CSS</h5>
                <div className="progress">
                  <div className="progress-bar" style={{width:"95%"}}></div>
                </div>
              </div>

              <div className="skill">
                <h5>Bootstrap</h5>
                <div className="progress">
                  <div className="progress-bar" style={{width:"90%"}}></div>
                </div>
              </div>

              <div className="skill">
                <h5>JavaScript</h5>
                <div className="progress">
                  <div className="progress-bar" style={{width:"85%"}}></div>
                </div>
              </div>

              <div className="skill">
                <h5>React JS</h5>
                <div className="progress">
                  <div className="progress-bar" style={{width:"80%"}}></div>
                </div>
              </div>

            </div>

            <button className="btn btn-primary mt-4">
              Download Resume
            </button>

          </div>

          <div className="col-lg-6 text-center">

            <div className="about-card">

              <div className="box">
                <h1>2+</h1>
                <p>Years Experience</p>
              </div>

              <div className="box">
                <h1>50+</h1>
                <p>Projects</p>
              </div>

              <div className="box">
                <h1>100%</h1>
                <p>Client Satisfaction</p>
              </div>

              <div className="box">
                <h1>24/7</h1>
                <p>Support</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ServicesSection;