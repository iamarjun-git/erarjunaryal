import Link from "next/link";

const projects = [
  {
    title: "Personal Portfolio Site",
    description: "A modern, responsive portfolio website built with Next.js and TypeScript.",
    tech: ["Next.js", "TypeScript", "CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "E-Learning Platform",
    description: "An interactive learning management system for computer engineering students.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity app for tracking tasks and projects with team collaboration features.",
    tech: ["React Native", "Firebase", "TypeScript"],
    link: "#",
    github: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container">
      <section className="section">
        <h1>Projects</h1>
        <p>
          A showcase of my work in web development, mobile apps, and educational tools.
        </p>
      </section>

      <section className="section">
        <div className="grid">
          {projects.map((project, index) => (
            <article key={index} className="card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div style={{ marginBottom: "1rem" }}>
                {project.tech.map((tech) => (
                  <span key={tech} className="badge" style={{ marginRight: "0.5rem" }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <Link href={project.link} className="badge">
                  View Project
                </Link>
                <Link href={project.github} className="badge">
                  GitHub
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}