function About({ about }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-header">
          <p className="section-label">About Me</p>

          <h2 className="section-title">
            Turning ideas into meaningful digital experiences.
          </h2>
        </div>

        <div className="about-content">
          <p>{about.description}</p>

          <div className="about-note">
            <span>Based in</span>
            <strong>Malawi · Working globally</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;