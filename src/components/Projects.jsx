

import projects from '../config/projects'

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <p className="eyebrow">SELECTED WORK</p>

        <h2>Projects that show what I can do.</h2>

        <p>
          A selection of personal projects built to demonstrate
          my frontend and full-stack development skills.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            className="project-card"
            key={project.id || project.title}
          >
            <div className="project-number">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Project Image */}
            {project.image && (
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                />
              </div>
            )}

            <div className="project-content">
              <span className="project-type">
                {project.type || 'Personal Project'}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              {project.tech && (
                <div className="project-tech">
                  {project.tech.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              )}

              <div className="project-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}

                {project.githubUrl && project.githubUrl !== '#' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects