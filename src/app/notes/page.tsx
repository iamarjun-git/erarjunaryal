import { NoteList } from "@/components/NoteList";
import { getAllNotes } from "@/lib/content";

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <div className="container">
      <section className="section">
        <h1>Notes</h1>
        <p>
          Quick notes and tips I write to capture ideas and shortcuts for
          studying and building.
        </p>
      </section>

      <section className="section">
        <NoteList notes={notes} />
      </section>
    </div>
  );
}
