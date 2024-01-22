import React from 'react'
import { nanoid } from "nanoid"
import EditNote from './EditNote'

const Notes = ({setNotes, notes, filterInput, filterTags }) => {
    if (filterTags.length > 0) {
        notes = notes.filter(note => filterTags.every(tag => note.tags.includes(tag)))
    }
    if (filterInput) {
        notes = notes.filter(note => note.title.toLowerCase().includes(filterInput.toLowerCase()))
    }

    return (
        <div>
            <ul>{notes.map(note => <li className="note" key={nanoid()}>
                <p>{note.title}</p>
                <EditNote notes={notes} setNotes={setNotes} note={note}/>
                <ul>{note?.tags && note.tags.map(tag => <li key={nanoid()}>{tag}</li>)}</ul>
                <p>{note.content}</p>
            </li>)}</ul>
        </div>
    )
}

export default Notes