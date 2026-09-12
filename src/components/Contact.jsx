import { useState } from 'react'
import siteConfig from '../config/site'

function Contact() {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsSubmitting(true)
    setStatus('')

    const form = event.currentTarget
    const formData = new FormData(form)

    formData.append(
      'access_key',
      'dfdf17ab-0428-45de-a676-657b5248d924'
    )

    formData.append(
      'subject',
      'New Project Inquiry from Portfolio'
    )

    formData.append(
      'from_name',
      'Sanoj Kumar Portfolio'
    )

    formData.append('replyto', formData.get('email'))




    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      )

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-heading">
        <p className="eyebrow">CONTACT</p>

        <h2>Have a project in mind?</h2>

        <p>
          Tell me about your website or web application and
          let's discuss how I can help.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Let's build something useful.</h3>

          <p>
            I'm available for freelance website development,
            React projects, MERN applications and website
            improvements.
          </p>

          <div className="contact-links">
            {siteConfig.email && (
              <a href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            )}

            {siteConfig.githubUrl && (
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            )}

            {siteConfig.linkedinUrl && (
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            )}
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
          />

          <label htmlFor="email">Email</label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
          />

          <label htmlFor="message">Project Details</label>

          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Tell me about your project..."
            required
          ></textarea>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message →'}
          </button>

          {status === 'success' && (
            <p className="form-message success">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}

          {status === 'error' && (
            <p className="form-message error">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact