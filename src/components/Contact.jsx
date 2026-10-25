function Contact({ personal }) {
  const whatsappMessage = encodeURIComponent(
    `Hi ${personal.name}, I came across your portfolio and would like to get in touch.`
  );

  const socialLinks = [
    {
      label: "WhatsApp",
      href: `${personal.whatsapp}?text=${whatsappMessage}`,
    },
    {
      label: "LinkedIn",
      href: personal.linkedin,
    },
    {
      label: "Instagram",
      href: personal.instagram,
    },
    {
      label: "GitHub",
      href: personal.github,
    },
  ];

  return (
    <section
      id="contact"
      className="section contact-section"
    >
      <div className="container contact-container">
        <div className="contact-intro">
          <p className="section-label">
            Get In Touch
          </p>

          <h2 className="section-title">
            Let's work together.
          </h2>

          <p className="contact-description">
            Interested in working together or learning
            more about my work? Feel free to get in
            touch.
          </p>
        </div>

        <div className="contact-details">
          <div className="contact-item">
            <span>Email</span>

            <a href={`mailto:${personal.email}`}>
              {personal.email}
            </a>
          </div>

          <div className="contact-item">
            <span>Phone</span>

            <a href={`tel:${personal.phone}`}>
              {personal.phone}
            </a>
          </div>

          <div className="contact-item">
            <span>Location</span>

            <p>{personal.location}</p>
          </div>

          <div className="contact-socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
                <span>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;