/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const metadata = {
  title: "Resume | S. Magesh Kumar",
  description: "Resume of S. Magesh Kumar, Computer Science Engineering student.",
};

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar">
        <Link href="/">← Portfolio</Link>
        <a className="primary-btn" href="/Magesh-Kumar-Resume.pdf" download>Download PDF ↓</a>
      </div>
      <article className="resume-sheet">
        <header className="resume-header">
          <div>
            <p>Aspiring Software Developer · Cloud Computing Enthusiast</p>
            <h1>S. Magesh Kumar</h1>
          </div>
          <div className="resume-contact">
            <span>Chennai, Tamil Nadu</span>
            <a href="mailto:mageshsiva1305@gmail.com">mageshsiva1305@gmail.com</a>
            <a href="https://github.com/magesh13052008-coder">github.com/magesh13052008-coder</a>
            <a href="https://www.linkedin.com/in/mageshkumar-s-592037383">linkedin.com/in/mageshkumar-s-592037383</a>
          </div>
          <img className="resume-photo" src="/magesh-profile.jpeg" alt="S. Magesh Kumar" width="88" height="108" />
        </header>

        <ResumeSection title="Profile">
          <p>Second-year B.E. Computer Science and Engineering student aspiring to become a software developer and cloud professional. Strong in applying generative AI tools for coding, research, content creation and workflow improvement, with hands-on experience building and deploying web applications. A quick learner who understands technical concepts easily and turns ideas into practical, user-focused projects.</p>
        </ResumeSection>

        <ResumeSection title="Education">
          <ResumeItem title="B.E. Computer Science and Engineering" meta="2025 - 2029" subtitle="Meenakshi Sundararajan Engineering College, Chennai" />
          <ResumeItem title="Class XII - Tamil Nadu State Board" meta="2025 · 60%" subtitle="Loyola Matriculation Higher Secondary School, Kodambakkam" />
          <ResumeItem title="Class X - Tamil Nadu State Board" meta="2023 · 62%" subtitle="Loyola Matriculation Higher Secondary School, Kodambakkam" />
        </ResumeSection>

        <ResumeSection title="Technical Skills">
          <div className="resume-skills">
            <p><strong>Programming</strong>Java, Python, C, Data Structures and Algorithms</p>
            <p><strong>Web</strong>HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind CSS</p>
            <p><strong>AI Skills</strong>Generative AI, prompt engineering, AI-assisted coding, research and workflow automation</p>
            <p><strong>Backend, Cloud &amp; Hosting</strong>Supabase, PostgreSQL, REST APIs, authentication, Vercel, Netlify and GitHub Pages</p>
            <p><strong>Tools</strong>Git, GitHub, VS Code, Lovable, Figma, ChatGPT and Gemini</p>
          </div>
        </ResumeSection>

        <ResumeSection title="Selected Projects">
          <ResumeProject title="Her Guardian" tech="React · Supabase · Maps API" points={["Personal-safety platform with SOS, emergency contacts, GPS tracking and journey sharing.", "Includes silent safe-word triggering, multilingual support and alert-status flows."]} />
          <ResumeProject title="Campus Buddy" tech="Next.js · TypeScript · Cloud" points={["Student hub covering resumes, placement preparation, coding practice, CGPA and attendance.", "Includes ATS feedback, interview preparation, challenges and skill tracking."]} />
        </ResumeSection>

        <ResumeSection title="Strengths & Activities">
          <ul>
            <li>Smart and quick learner with the ability to understand technical concepts easily.</li>
            <li>Practical problem-solving, clear communication, teamwork, adaptability and self-motivation.</li>
            <li>Comfortable deploying websites and troubleshooting hosting or build issues.</li>
            <li>Badminton player and gym/fitness enthusiast, demonstrating discipline, consistency and an active lifestyle.</li>
          </ul>
        </ResumeSection>
      </article>
    </main>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="resume-section"><h2>{title}</h2><div>{children}</div></section>;
}

function ResumeItem({ title, meta, subtitle }: { title: string; meta: string; subtitle?: string }) {
  return <div className="resume-item"><div><h3>{title}</h3>{subtitle && <p>{subtitle}</p>}</div><span>{meta}</span></div>;
}

function ResumeProject({ title, tech, points }: { title: string; tech: string; points: string[] }) {
  return <div className="resume-project"><div><h3>{title}</h3><span>{tech}</span></div><ul>{points.map((point) => <li key={point}>{point}</li>)}</ul></div>;
}
