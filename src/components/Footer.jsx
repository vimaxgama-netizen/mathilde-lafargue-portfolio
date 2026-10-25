function Footer({ personal, socialLinks }) {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            {personal.name}
          </a>

          <p>
            {personal.title}
          </p>
        </div>

        <div className="social-links">
          <a
            href={personal.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>

        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;