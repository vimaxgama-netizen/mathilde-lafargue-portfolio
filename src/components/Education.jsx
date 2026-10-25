function Education({ education }) {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label">Education</p>

        <h2 className="section-title">
          Academic background
        </h2>

        <div className="education-list">
          {education.map((item, index) => (
            <article
              className="education-card"
              key={`${item.institution}-${item.degree}`}
            >
              <div className="education-top">
                <span className="education-period">
                  {item.period}
                </span>

                <span className="education-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{item.degree}</h3>

              <p>{item.institution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;