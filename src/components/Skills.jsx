import skills from '../config/skills'

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <p className="eyebrow">TECHNICAL SKILLS</p>
        <h2>Tools I use to build the web.</h2>
        <p>
          Technologies and tools I work with across frontend, backend,
          databases and deployment.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skillGroup) => (
          <div className="skill-group" key={skillGroup.id || skillGroup.title}>
            <h3>{skillGroup.title}</h3>

            <div className="skill-list">
              {skillGroup.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills