import { useState } from "react";
import { Note } from "./Note";
import { defaultNotes } from "./data";
import NoteCreator from "./NoteCreator";
export function Notes() {
  const [notes, setNotes] = useState(defaultNotes);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const listNotes = notes.map((note) => (
    <Note
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      key={note.id}
      note={note}
    ></Note>
  ));
  const isFormValid = newNote.content !== "";
  function handleDelete(id) {
    setNotes(notes.filter((a) => a.id !== id));
    console.log("clicked");
  }
  function handleChange(e) {
    setNewNote({
      ...newNote,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit() {
    if (isFormValid) {
      // let newNotes = notes.slice();

      // newNotes.push({
      //   id: Date.now(),
      //   ...newNote,
      // });

      setNewNote({ title: "", content: "" });
      setNotes([...notes, { ...newNote, id: Date.now() }]);
    } else {
      alert("You must fill content");
    }
  }
  function handleEdit(note) {
    setNotes(
      notes.map((t) => {
        if (t.id === note.id) {
          return note;
        } else {
          return t;
        }
      }),
    );
  }

  return (
    <div>
      <NoteCreator
        newNote={newNote}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      ></NoteCreator>
      <div className="notes">{listNotes}</div>
    </div>
  );
}
