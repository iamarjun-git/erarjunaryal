import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container">
      <section className="section">
        <header>
          <h1>Hi, I am Er. Arjun Aryal</h1>
          <p>
            I’m a Computer Engineer, lecturer, and writer. I build modern web
            applications and teach the next generation of developers.
          </p>
        </header>
      </section>

      <section className="section">
        <h2>Featured</h2>
        <div className="grid">
          <div className="card">
            <h3>Projects</h3>
            <p>
              Explore my portfolio of web applications, mobile apps, and educational tools.
            </p>
            <Link href="/projects" className="badge">
              View projects
            </Link>
          </div>

          <div className="card">
            <h3>Blog</h3>
            <p>
              Read my latest thoughts on software engineering, teaching, and
              growth.
            </p>
            <Link href="/blog" className="badge">
              Explore blog
            </Link>
          </div>

          <div className="card">
            <h3>Notes</h3>
            <p>
              A growing collection of quick notes and practical tips for learners
              and builders.
            </p>
            <Link href="/notes" className="badge">
              Browse notes
            </Link>
          </div>

          <div className="card">
            <h3>About</h3>
            <p>
              Learn more about my background, experience, and how to get in touch.
            </p>
            <Link href="/about" className="badge">
              About me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
