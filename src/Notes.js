import React from 'react'
import { nanoid } from "nanoid"

const Notes = ({ setNotes, notes, filterInput, filterTags }) => {
    if (filterTags.length > 0) {
        notes = notes.filter(note => filterTags.every(tag => note.tags.includes(tag)))
    }
    if (filterInput) {
        notes = notes.filter(note => note.title.toLowerCase().includes(filterInput.toLowerCase()))
    }

    return (
        <div id="notesDiv">
            <ul>{notes.map(note => <li className="note" key={nanoid()}>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <button onClick={() => setNotes(prev => prev.filter(x => x.id !== note.id))} className="removeButton">REMOVE</button>
                {/* <EditNote notes={notes} setNotes={setNotes} note={note}/> */}
                <ul>{note?.tags && note.tags.map(tag => <li className="tagInNote" key={nanoid()}>{tag}</li>)}</ul>
            </li>)}
            </ul>
        </div>
    )
}

export default Notes