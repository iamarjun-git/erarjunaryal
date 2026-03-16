import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/content";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="container">
      <article className="section">
        <h1>{post.title}</h1>
        <div style={{
          marginBottom: "2rem",
          padding: "1.5rem",
          background: "rgba(15, 23, 42, 0.5)",
          borderRadius: "var(--radius)",
          border: "1px solid var(--border)"
        }}>
          <div style={{
            fontSize: "1.1rem",
            color: "var(--accent)",
            fontWeight: "600",
            marginBottom: "0.5rem"
          }}>
            Published on {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div>
            {post.tags.map((tag) => (
              <span key={tag} className="badge" style={{ marginRight: "0.5rem" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div style={{ whiteSpace: "pre-wrap", marginTop: "1.25rem" }}>
          {post.content}
        </div>
      </article>
    </div>
  );
}
