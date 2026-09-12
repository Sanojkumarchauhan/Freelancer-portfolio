import services from '../config/services'

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="section-heading">
        <p className="eyebrow">SERVICES</p>
        <h2>What I can build for you.</h2>
        <p>
          From simple websites to complete web applications, I provide
          practical development solutions for different business needs.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.id || service.title}>
            <span className="service-number">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="#contact" className="text-link">
              Discuss this service →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services