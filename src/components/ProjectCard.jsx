function ProjectCard({ project, number }) {
  return (
    <article className="project-card">
      <div className="project-image">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
          />
        ) : (
          <span>
            Project {String(number).padStart(2, "0")}
          </span>
        )}

        <div className="project-number">
          {String(number).padStart(2, "0")}
        </div>
      </div>

      <div className="project-content">
        <p className="project-category">
          {project.category}
        </p>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-tools">
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>

        <div className="project-link">
          <span>View Project</span>
          <span className="project-arrow">↗</span>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;