import { BlogList } from "@/components/BlogList";
import { getAllPosts } from "@/lib/content";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container">
      <section className="section">
        <h1>Blog</h1>
        <p>
          Thoughts, tutorials, and lessons from my experience building software and
          teaching.
        </p>
      </section>

      <section className="section">
        <BlogList posts={posts} />
      </section>
    </div>
  );
}
