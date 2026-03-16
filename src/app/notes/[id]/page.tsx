import { notFound } from "next/navigation";
import { getNoteById } from "@/lib/content";

export default async function NotePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const note = getNoteById(id);
  if (!note) {
    notFound();
  }

  return (
    <div className="container">
      <article className="section">
        <h1>{note.title}</h1>
        <p className="author">
          <span>{new Date(note.updatedAt).toLocaleDateString()}</span>
          <span className="badge">{note.tags.join(", ")}</span>
        </p>
        <div style={{ whiteSpace: "pre-wrap", marginTop: "1.25rem" }}>
          {note.content}
        </div>
      </article>
    </div>
  );
}
