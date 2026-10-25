function Hero({ personal, profileImage, cv }) {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        
        <div className="hero-content">
          <p className="eyebrow">
            Hello, I'm
          </p>

          <h1>{personal.name}</h1>

          <h2>{personal.title}</h2>

          <p className="hero-description">
            {personal.tagline}
          </p>

          <div className="hero-meta">
            <span>{personal.location}</span>
          </div>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="btn btn-primary"
            >
              View My Work
            </a>

            {cv && (
              <a
                href={cv}
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            )}
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-image">
            <img
              src={profileImage}
              alt={`${personal.name} - ${personal.title}`}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;