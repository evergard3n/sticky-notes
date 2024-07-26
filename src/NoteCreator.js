import { useState } from "react";

export default function NoteCreator({ handleSubmit }) {
  const [isEditing, setEditing] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
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
              handleSubmit(newNote);
              setEditing(!isEditing);
            }}
          >
            <input
              name="title"
              placeholder="Title"
              value={newNote.title}
              onChange={(e) => {
                setNewNote({ ...newNote, [e.target.name]: e.target.value });
              }}
            />
            <textarea
              autoFocus
              name="content"
              placeholder="Content"
              value={newNote.content}
              onChange={(e) => {
                setNewNote({ ...newNote, [e.target.name]: e.target.value });
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
