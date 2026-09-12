import siteConfig from '../config/site'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <a href="#home" className="footer-logo">
            {siteConfig.name}
          </a>

          <p>
            {siteConfig.role}
          </p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {currentYear} {siteConfig.name}. All rights reserved.
        </span>

        <a href="#home">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer