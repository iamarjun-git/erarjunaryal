import type { BlogPost } from "@/types";
import Link from "next/link";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid">
      {posts.map((post) => (
        <article key={post.slug} className="card">
          <h3>{post.title}</h3>
          <p>{post.summary}</p>
          <div className="author">
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            <span className="badge">{post.tags.join(", ")}</span>
          </div>
          <Link href={`/blog/${post.slug}`} className="badge">
            Read more
          </Link>
        </article>
      ))}
    </div>
  );
}
