import { createContext, useContext, useReducer } from "react";
export const DarkModeContext = createContext();
export const NotesContext = createContext(null);
export const NotesDispatchContext = createContext(null);
import noteReducer from "./noteReducer";
import { defaultNotes } from "./data";
export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(noteReducer, defaultNotes);
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}
