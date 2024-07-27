import { useState } from "react";
import { useContext } from "react";
import { NotesDispatchContext } from "./Context";
export function Note({ note }) {
  const [isChanging, setIsChanging] = useState(false);
  const [currentNote, setCurrentNote] = useState(note);
  const dispatch = useContext(NotesDispatchContext);
  let noteContent;
  if (!isChanging) {
    noteContent = (
      <div>
        <div className="note">
          <div className="note-title">{currentNote.title}</div>
          <div className="note-content">{currentNote.content}</div>
          <div className="buttons-holder">
            <button onClick={() => setIsChanging(!isChanging)}>Edit</button>
            <button
              onClick={() => {
                dispatch({
                  type: "delete",
                  id: note.id,
                });
              }}
            >
              Delete
            </button>
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
              value={currentNote.title}
              onChange={(e) => {
                setCurrentNote({ ...currentNote, title: e.target.value });
              }}
              placeholder="bruh"
            />
            <textarea
              name="content"
              onChange={(e) => {
                setCurrentNote({ ...currentNote, content: e.target.value });
              }}
              value={currentNote.content}
            />
            <button
              type="submit"
              onClick={() => {
                setIsChanging(!isChanging);
                dispatch({
                  type: "edit",
                  note: currentNote,
                });
              }}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
  return noteContent;
}
