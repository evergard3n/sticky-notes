import { useState, useContext } from "react";
import { NotesDispatchContext } from "./Context";

export default function NoteCreator() {
  const [isEditing, setEditing] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const dispatch = useContext(NotesDispatchContext);
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
              dispatch({
                type: "submit",
                note: newNote,
              });
              setNewNote({ title: "", content: "" });
              setEditing(!isEditing);
            }}
          >
            <input
              name="title"
              placeholder="Title"
              value={newNote.title}
              onChange={(e) => {
                setNewNote({ ...newNote, title: e.target.value });
              }}
            />
            <textarea
              autoFocus
              name="content"
              placeholder="Content"
              value={newNote.content}
              onChange={(e) => {
                setNewNote({ ...newNote, content: e.target.value });
              }}
            />
            <br />
            <button type="submit" disabled={!newNote.content}>
              Add note
            </button>
            <button
              onClick={() => {
                setEditing(!isEditing);
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
