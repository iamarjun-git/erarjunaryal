import type { Note } from "@/types";
import Link from "next/link";

export function NoteList({ notes }: { notes: Note[] }) {
  return (
    <div className="grid">
      {notes.map((note) => (
        <article key={note.id} className="card">
          <h3>{note.title}</h3>
          <p>{note.excerpt}</p>
          <div className="author">
            <span>{new Date(note.updatedAt).toLocaleDateString()}</span>
            <span className="badge">{note.tags.join(", ")}</span>
          </div>
          <Link href={`/notes/${note.id}`} className="badge">
            Read note
          </Link>
        </article>
      ))}
    </div>
  );
}
