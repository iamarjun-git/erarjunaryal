import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/content";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="container">
      <article className="section">
        <h1>{post.title}</h1>
        <p className="author">
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          <span className="badge">{post.tags.join(", ")}</span>
        </p>
        <div style={{ whiteSpace: "pre-wrap", marginTop: "1.25rem" }}>
          {post.content}
        </div>
      </article>
    </div>
  );
}
