import React, { useContext } from "react";
import { Note } from "./Note";
import NoteContext from "../context/note-context";

const NoteList = ({ removeNote }) => {
  const { notes } = useContext(NoteContext);

  return notes.map((note) => (
    <Note key={note.title} note={note} removeNote={removeNote} />
  ));
};

export default NoteList;
