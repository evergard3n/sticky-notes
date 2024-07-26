import { useState } from "react";

export default function NoteCreator({ newNote, handleChange, handleSubmit }) {
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
