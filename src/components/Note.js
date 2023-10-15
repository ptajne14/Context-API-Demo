import React from "react"

export const Note = ({ note, removeNote }) => {

    return (
        <div>
            <h3 >{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => removeNote(note.title)}>x</button>
        </div>
    )
}