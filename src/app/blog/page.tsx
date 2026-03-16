"use client";

import { BlogList } from "@/components/BlogList";
import { getAllPosts } from "@/lib/content";
import { useState, useMemo } from "react";

export default function BlogPage() {
  const allPosts = getAllPosts();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = useMemo(() => {
    if (!searchQuery) return allPosts;

    return allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [allPosts, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <section className="section">
        <h1>Blog</h1>
        <p>
          Thoughts, tutorials, and lessons from my experience building software and
          teaching.
        </p>

        {/* Search Bar */}
        <div style={{ marginTop: "2rem", marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Search posts by title, content, or tags..."
            value={searchQuery}
            onChange={handleSearch}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              background: "rgba(15, 23, 42, 0.7)",
              color: "var(--text)",
              fontSize: "1rem"
            }}
          />
        </div>

        {/* Results count */}
        {searchQuery && (
          <p style={{ marginBottom: "1rem", color: "var(--muted)" }}>
            Found {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} matching "{searchQuery}"
          </p>
        )}
      </section>

      <section className="section">
        <BlogList posts={paginatedPosts} />

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginTop: "2rem",
            flexWrap: "wrap"
          }}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                background: currentPage === 1 ? "rgba(15, 23, 42, 0.5)" : "rgba(15, 23, 42, 0.7)",
                color: currentPage === 1 ? "var(--muted)" : "var(--text)",
                cursor: currentPage === 1 ? "not-allowed" : "pointer"
              }}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  background: currentPage === page ? "var(--accent)" : "rgba(15, 23, 42, 0.7)",
                  color: currentPage === page ? "white" : "var(--text)",
                  cursor: "pointer"
                }}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                background: currentPage === totalPages ? "rgba(15, 23, 42, 0.5)" : "rgba(15, 23, 42, 0.7)",
                color: currentPage === totalPages ? "var(--muted)" : "var(--text)",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer"
              }}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
