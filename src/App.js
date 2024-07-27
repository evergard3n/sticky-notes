import "./styles.css";

import { Notes } from "./Notes";
import { NotesProvider } from "./Context";
export default function App() {
  return (
    <NotesProvider>
      <Notes />
    </NotesProvider>
  );
}
