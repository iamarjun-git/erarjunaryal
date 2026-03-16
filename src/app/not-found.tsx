import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container">
      <section className="section">
        <h1>Page not found</h1>
        <p>
          Sorry, the page you are looking for doesn&apos;t exist. Try going back to
          the home page.
        </p>
        <Link href="/" className="badge">
          Back to home
        </Link>
      </section>
    </div>
  );
}
