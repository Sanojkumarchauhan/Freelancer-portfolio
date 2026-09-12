import siteConfig from '../config/site'

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="eyebrow">MERN STACK DEVELOPER</p>

        <h1>
          Building the web
          <br />
          <span>with clarity.</span>
        </h1>

        <p className="hero-description">
          I build responsive, modern and user-friendly web applications
          using React, Node.js, Express.js and MongoDB.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>

          <a href="#contact" className="btn btn-secondary">
            Let's Work Together
          </a>

          {siteConfig.resumeUrl && (
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              View Resume ↗
            </a>
          )}
        </div>

        <div className="hero-meta">
          <span>Based in India</span>
          <span>•</span>
          <span>Available for Freelance Work</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-card">
          <div className="code-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <pre>
{`const developer = {
  name: "${siteConfig.name}",
  role: "MERN Developer",
  skills: [
    "React",
    "Node.js",
    "MongoDB"
  ],
  available: true
}`}
          </pre>
        </div>

        <div className="hero-badge">
          <strong>01</strong>
          <span>
            Web
            <br />
            Development
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero