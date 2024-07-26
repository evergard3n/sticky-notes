import { useState } from "react";

export function Note({ note, handleEdit, handleDelete }) {
  const [isChanging, setIsChanging] = useState(false);
  let noteContent;
  if (!isChanging) {
    noteContent = (
      <div>
        <div className="note">
          <div className="note-title">{note.title}</div>
          <div className="note-content">{note.content}</div>
          <div className="buttons-holder">
            <button onClick={() => setIsChanging(!isChanging)}>Edit</button>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  } else {
    noteContent = (
      <div>
        <div className="note">
          <form>
            <input
              className="note-title"
              type="text"
              name="title"
              value={note.title}
              onChange={(e) => {
                handleEdit({ ...note, [e.target.name]: e.target.value });
              }}
              placeholder="bruh"
            />
            <textarea
              name="content"
              onChange={(e) => {
                handleEdit({ ...note, [e.target.name]: e.target.value });
              }}
              value={note.content}
            />
            <button type="submit" onClick={() => setIsChanging(!isChanging)}>
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
  return noteContent;
}
