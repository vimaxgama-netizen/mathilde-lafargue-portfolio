function Certifications({ certifications }) {
  return (
    <section className="section section-light">
      <div className="container">
        <p className="section-label">Certifications</p>

        <h2 className="section-title">
          Continuous learning
        </h2>

        <div className="certifications-grid">
          {certifications.map((certification, index) => (
            <article
              className="certification-card"
              key={`${certification.name}-${certification.year}`}
            >
              <div className="certification-top">
                <span className="certification-year">
                  {certification.year}
                </span>

                <span className="certification-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{certification.name}</h3>

              <p>{certification.organization}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;