import "./index.css";
import portfolioData from "./data/portfolioData";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { personal } = portfolioData;

  return (
    <div className="app">
      <Navbar name={personal.name} />

      <main>
        <Hero
  personal={personal}
  profileImage={portfolioData.personal.profileImage}
  cv={personal.cv}
/>

        <About about={portfolioData.about} />

        <Experience
          experience={portfolioData.experience}
        />

        <Education
          education={portfolioData.education}
        />

        <Skills skills={portfolioData.skills} />

        <section id="projects" className="section">
          <div className="container">
            <p className="section-label">Selected Work</p>

            <h2 className="section-title">
              Projects I've worked on
            </h2>

            <div className="projects-grid">
              {portfolioData.projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  number={index + 1}
                />
              ))}
            </div>
          </div>
        </section>

        <Certifications
          certifications={portfolioData.certifications}
        />

        <Contact personal={personal} />
      </main>

      <Footer
        personal={personal}
        socialLinks={portfolioData.socialLinks}
      />
    </div>
  );
}

export default App;