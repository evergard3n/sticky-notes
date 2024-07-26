import { useState, useReducer } from "react";
import { Note } from "./Note";
import { defaultNotes } from "./data";
import NoteCreator from "./NoteCreator";
import noteReducer from "./noteReducer";

export function Notes() {
  // const [notes, setNotes] = useState(defaultNotes);
  const [notes, dispatch] = useReducer(noteReducer, defaultNotes);
  // const [newNote, setNewNote] = useState({ title: "", content: "" });

  const listNotes = notes.map((note) => (
    <Note
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      key={note.id}
      note={note}
    ></Note>
  ));

  function handleDelete(id) {
    dispatch({
      type: "delete",
      id: id,
    });
  }
  // function handleChange(e) {
  //   setNewNote({
  //     ...newNote,
  //     [e.target.name]: e.target.value,
  //   });
  // }
  function handleSubmit(newNote) {
    dispatch({
      type: "submit",
      note: newNote,
    });
  }
  function handleEdit(note) {
    dispatch({
      type: "edit",
      note: note,
    });
  }

  return (
    <div>
      <NoteCreator handleSubmit={handleSubmit}></NoteCreator>
      <div className="notes">{listNotes}</div>
    </div>
  );
}
