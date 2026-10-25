function Skills({ skills }) {
  const groups = [
    {
      title: "Marketing",
      description: "Strategy, growth and audience engagement.",
      skills: skills.marketing,
    },
    {
      title: "Technical",
      description: "Tools and platforms used to execute ideas.",
      skills: skills.technical,
    },
    {
      title: "Professional",
      description: "The qualities I bring to every project.",
      skills: skills.professional,
    },
  ];

  return (
    <section id="skills" className="section section-dark">
      <div className="container">
        <p className="section-label">Skills</p>

        <h2 className="section-title">
          What I bring to the table
        </h2>

        <div className="skills-grid">
          {groups.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <div className="skill-group-header">
                <span className="skill-group-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{group.title}</h3>
              </div>

              <p className="skill-group-description">
                {group.description}
              </p>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;