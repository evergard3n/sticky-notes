import "./styles.css";
import { useState } from "react";
import { Notes } from "./Notes";
import Toolbar from "./Toolbar";
import { RToolbar } from "./Toolbar";
function AlertButton({ message, children }) {
  return (
    <button
      onClick={() => {
        alert(message);
      }}
    >
      {children}
    </button>
  );
}
export default function App() {
  return (
    <>
      <Notes />
    </>
  );
}
