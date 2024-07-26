export default function noteReducer(notes, action) {
  switch (action.type) {
    case "delete": {
      return notes.filter((a) => a.id !== action.id);
    }
    case "submit": {
      return [
        ...notes,
        {
          ...action.note,
          id: Date.now(),
        },
      ];
    }
    case "edit": {
      return notes.map((t) => {
        if (t.id === action.note.id) {
          return action.note;
        } else {
          return t;
        }
      });
    }
  }
}
