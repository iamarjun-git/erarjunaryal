import type { BlogPost } from "@/types";
import Link from "next/link";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid">
      {posts.map((post) => (
        <article key={post.slug} className="card">
          <h3>{post.title}</h3>
          <p>{post.summary}</p>
          <div className="author" style={{ marginBottom: "1rem" }}>
            <div style={{
              fontSize: "0.9rem",
              color: "var(--accent)",
              fontWeight: "600",
              marginBottom: "0.5rem"
            }}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div>
              {post.tags.map((tag) => (
                <span key={tag} className="badge" style={{ marginRight: "0.5rem", marginBottom: "0.25rem" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <Link href={`/blog/${post.slug}`} className="badge">
            Read more
          </Link>
        </article>
      ))}
    </div>
  );
}
