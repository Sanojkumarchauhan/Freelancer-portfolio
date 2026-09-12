import siteConfig from '../config/site'

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-heading">
        <p className="eyebrow">ABOUT ME</p>
        <h2>Turning ideas into useful digital experiences.</h2>
      </div>

      <div className="about-grid">
        <div className="about-intro">
          <p className="about-highlight">
            I'm {siteConfig.name}, a {siteConfig.role}.
          </p>

          <p>
            I focus on creating clean, responsive and practical websites
            that are easy to use and work smoothly across different devices.
          </p>
        </div>

        <div className="about-details">
          <p>
            My development workflow covers both frontend and backend,
            allowing me to build complete web applications from interface
            to deployment.
          </p>

          <div className="about-points">
            <div>
              <strong>01</strong>
              <span>Responsive Design</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Modern Development</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Clean & Maintainable Code</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Deployment Support</span>
            </div>
          </div>

          <a href="#contact" className="text-link">
            Start a conversation →
          </a>
        </div>
      </div>
    </section>
  )
}

export default About