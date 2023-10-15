import React, { useEffect, useReducer } from "react";
import { notesReducer } from "../reducer/note";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";
import NoteContext from "../context/note-context";

export const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  const removeNote = (title) => {
    dispatch({
      type: "REMOVE_NOTE",
      title,
    });
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));

    if (notes) {
      dispatch({ type: "POPULATE_NOTES", notes });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NoteContext.Provider value={{notes, dispatch}}>
      <h1>Notes</h1>
      <NoteList removeNote={removeNote} />
      <AddNoteForm dispatch={dispatch} />
    </NoteContext.Provider>
  );
};
