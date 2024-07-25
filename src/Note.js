import { useState } from "react";
import { defaultNotes } from "../data";
function NoteCreator({ newNote, handleChange, handleSubmit }) {
  const [isEditing, setEditing] = useState(false);
  return (
    <div className="creator">
      {!isEditing ? (
        <input
          autoFocus
          className="creator-input"
          placeholder="Create a new note"
          onClick={(e) => {
            e.preventDefault();
            setEditing(!isEditing);
          }}
        />
      ) : (
        <div className="create-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
              setEditing(!isEditing);
            }}
          >
            <input
              name="title"
              placeholder="Title"
              value={newNote.title}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <textarea
              autoFocus
              name="content"
              placeholder="Content"
              value={newNote.content}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <button type="submit" disabled={!newNote.content}>
              Add note
            </button>
            <button onClick={() => setEditing(!isEditing)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}
export function Notes() {
  const [notes, setNotes] = useState(defaultNotes);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const listNotes = notes.map((note) => (
    <Note
      handleDelete={handleDelete}
      key={note.id}
      id={note.id}
      title={note.title}
      content={note.content}
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

export function Note({ title, content, id, handleDelete }) {
  return (
    <div>
      <div className="note">
        <div className="note-title">{title}</div>
        <div className="note-content">{content}</div>
        <div className="buttons-holder">
          <button>Edit</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
