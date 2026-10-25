function Experience({ experience }) {
  return (
    <section id="experience" className="section section-light">
      <div className="container">
        <p className="section-label">Experience</p>

        <h2 className="section-title">
          My professional journey
        </h2>

        <div className="experience-list">
          {experience.map((job, index) => (
            <article
              className="experience-item"
              key={`${job.company}-${job.position}`}
            >
              <div className="experience-date">
                {job.period}
              </div>

              <div className="experience-content">
                <div className="experience-heading">
                  <div>
                    <h3>{job.position}</h3>

                    <h4>
                      {job.company} · {job.location}
                    </h4>
                  </div>

                  <span className="experience-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p>{job.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;