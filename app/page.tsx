import InteractiveIdCard from "./components/InteractiveIdCard";
import RoleRotator from "./components/RoleRotator";
import {
  SiC,
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiOpenjdk,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const skills = [
  { icon: SiReact, name: "React", category: "Front-end Library", tone: "react" },
  { icon: SiTypescript, name: "TypeScript", category: "Typed JavaScript", tone: "typescript" },
  { icon: SiTailwindcss, name: "Tailwind CSS", category: "UI Styling", tone: "tailwind" },
  { icon: SiHtml5, name: "HTML5", category: "Semantic Markup", tone: "html" },
  { icon: SiCss3, name: "CSS3", category: "Responsive Design", tone: "css" },
  { icon: SiOpenjdk, name: "Java", category: "Programming", tone: "java" },
  { icon: SiPython, name: "Python", category: "Programming", tone: "python" },
  { icon: SiC, name: "C Language", category: "Core Programming", tone: "clang" },
  { icon: SiGithub, name: "GitHub", category: "Version Control", tone: "github" },
  { icon: SiJavascript, name: "JavaScript", category: "Web Language", tone: "javascript" },
  { icon: SiSupabase, name: "Supabase", category: "Back-end Platform", tone: "supabase" },
  { icon: SiVercel, name: "Vercel", category: "Cloud Deployment", tone: "vercel" },
];

const projects = [
  {
    number: "01",
    title: "Her Guardian",
    category: "Safety · Full Stack",
    description:
      "A women-safety platform with SOS alerts, emergency contacts, live GPS tracking and a silent safe-word trigger.",
    tech: ["React", "Supabase", "Maps API"],
    href: "https://https-her-guardian-app-com.lovable.app/",
    mockup: "guardian",
  },
  {
    number: "02",
    title: "Campus Buddy",
    category: "Education · Cloud",
    description:
      "A student productivity platform for placements, coding practice, resumes, CGPA, attendance and interview preparation.",
    tech: ["Next.js", "TypeScript", "Cloud"],
    href: "https://campus-buddy-mt.vercel.app/",
    mockup: "campus",
  },
];

export default function Home() {
  return (
    <main className="portfolio-shell">
      <header className="mono-nav">
        <a className="mono-logo" href="#home">Magesh.MT</a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#skills">Skills</a>
          <a href="/resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="mono-hero mono-section" id="home">
        <div className="corner-glow glow-left" />
        <div className="hero-content reveal">
          <p className="mini-label">Hello, I&apos;m</p>
          <h1>
            Magesh
            <span>Kumar</span>
          </h1>
          <RoleRotator />
          <p className="hero-description">
            I&apos;m <strong>S. Magesh Kumar</strong>, a Computer Science Engineering
            student focused on professional front-end experiences, reliable back-end
            systems and modern cloud deployment.
          </p>
          <div className="mono-actions">
            <a className="mono-button solid" href="#portfolio">View my work <span>↗</span></a>
            <a className="mono-button" href="/Magesh-Kumar-Resume.pdf" download>Download resume <span>↓</span></a>
          </div>
          <div className="social-row">
            <a href="https://github.com/magesh13052008-coder" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mageshkumar-s-592037383" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:mageshsiva1305@gmail.com">Email</a>
          </div>
        </div>

        <div className="hanging-portrait reveal delay-one">
          <InteractiveIdCard />
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL</span><i>↓</i></a>
      </section>

      <section className="mono-about mono-section" id="about">
        <div className="section-number">01 / ABOUT</div>
        <div className="about-layout reveal">
          <div>
            <p className="mini-label">Who I am</p>
            <h2>Smart learner.<br /><span>Practical builder.</span></h2>
          </div>
          <div className="about-text">
            <p>
              I&apos;m pursuing <strong>B.E. Computer Science and Engineering</strong> at
              Meenakshi Sundararajan Engineering College, Chennai.
            </p>
            <p>
              My goal is to become a skilled software developer and cloud computing
              professional. I learn technical concepts quickly, enjoy solving
              problems, and turn ideas into simple experiences people can understand.
            </p>
            <div className="about-facts">
              <div><strong>02+</strong><span>Live projects</span></div>
              <div><strong>2029</strong><span>Graduation</span></div>
              <div><strong>24/7</strong><span>Learning mode</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase mono-section" id="portfolio">
        <div className="corner-glow glow-right" />
        <div className="showcase-title reveal">
          <p className="mini-label">Selected projects</p>
          <h2>Portfolio Showcase</h2>
          <p>Explore my projects, technical work and learning journey.</p>
          <div className="showcase-tabs" role="tablist" aria-label="Portfolio categories">
            <span className="active">Projects</span>
            <a href="/resume">Resume</a>
            <a href="#skills">Tech Stack</a>
          </div>
        </div>

        <div className="mono-project-grid">
          {projects.map((project) => (
            <article className="mono-project reveal" key={project.title}>
              <div className={`project-mockup ${project.mockup}`}>
                <div className="mockup-window">
                  <div className="window-bar"><i /><i /><i /></div>
                  <div className="window-body">
                    <span>{project.number}</span>
                    <strong>{project.title}</strong>
                    <small>{project.category}</small>
                  </div>
                </div>
              </div>
              <div className="mono-project-copy">
                <div className="project-meta"><span>{project.number}</span><small>{project.category}</small></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="mono-tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
                <a href={project.href} target="_blank" rel="noreferrer">View project <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="stack mono-section" id="skills">
        <div className="section-number">03 / SKILLS</div>
        <div className="showcase-title reveal">
          <p className="mini-label">My toolkit</p>
          <h2>Technical Stack</h2>
          <p>Technologies I use, practice and continue to improve.</p>
        </div>
        <div className="stack-grid reveal">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div className={`stack-card ${skill.tone}`} key={skill.name}>
                <span className="stack-number">0{index + 1}</span>
                <span className="stack-icon"><Icon aria-hidden="true" /></span>
                <div>
                  <strong>{skill.name}</strong>
                  <small>{skill.category}</small>
                </div>
                <i className="stack-shine" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </section>

      <section className="mono-contact mono-section" id="contact">
        <div className="contact-box reveal">
          <p className="mini-label">Let&apos;s connect</p>
          <h2>Have a project<br />or opportunity?</h2>
          <p>I&apos;m open to internships, collaborations and software development opportunities.</p>
          <div className="contact-details">
            <a className="contact-card" href="mailto:mageshsiva1305@gmail.com">
              <span className="contact-index">01</span>
              <span className="contact-copy">
                <small>Email</small>
                <strong>mageshsiva1305@gmail.com</strong>
              </span>
              <i aria-hidden="true">↗</i>
            </a>
            <a className="contact-card" href="tel:+916382988384">
              <span className="contact-index">02</span>
              <span className="contact-copy">
                <small>Phone</small>
                <strong>+91 63829 88384</strong>
              </span>
              <i aria-hidden="true">↗</i>
            </a>
            <a
              className="contact-card"
              href="https://www.linkedin.com/in/mageshkumar-s-592037383"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-index">03</span>
              <span className="contact-copy">
                <small>LinkedIn</small>
                <strong>Magesh Kumar S</strong>
              </span>
              <i aria-hidden="true">↗</i>
            </a>
          </div>
          <a className="mono-button solid" href="mailto:mageshsiva1305@gmail.com">Send me a message <span>↗</span></a>
        </div>
      </section>

      <footer className="mono-footer">
        <span>Magesh.MT</span>
        <p>Designed &amp; built by S. Magesh Kumar · 2026</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
