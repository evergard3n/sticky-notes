import { useState, useReducer, useContext } from "react";
import { Note } from "./Note";
import { defaultNotes } from "./data";
import NoteCreator from "./NoteCreator";
import noteReducer from "./noteReducer";
import { DarkModeContext, NotesContext, NotesDispatchContext } from "./Context";

export function Notes() {
  // const [notes, setNotes] = useState(defaultNotes);
  const notes = useContext(NotesContext);
  const dispatch = useContext(NotesDispatchContext);
  const [darkMode, setDarkMode] = useState(false);

  // const [newNote, setNewNote] = useState({ title: "", content: "" });

  const listNotes = notes.map((note) => (
    <Note key={note.id} note={note}></Note>
  ));

  // function handleDelete(id) {
  //   dispatch({
  //     type: "delete",
  //     id: id,
  //   });
  // }

  function handleSubmit(newNote) {
    dispatch({
      type: "submit",
      note: newNote,
    });
  }
  // function handleEdit(note) {
  //   dispatch({
  //     type: "edit",
  //     note: note,
  //   });
  // }

  return (
    <DarkModeContext.Provider value={darkMode}>
      <div className="util-bar">
        <NoteCreator handleSubmit={handleSubmit}></NoteCreator>
        <button
          onClick={() => {
            setDarkMode(!darkMode);
            console.log(notes);
          }}
        >
          <i className="fa-solid fa-moon"></i>
        </button>
      </div>

      <div className="notes">{listNotes}</div>
    </DarkModeContext.Provider>
  );
}
