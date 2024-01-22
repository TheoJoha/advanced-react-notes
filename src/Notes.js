import React from 'react'
import {nanoid} from "nanoid"

const Notes = ({notes, filterInput, filterTags}) => {
    if (filterTags.length > 0) {
        notes = notes.filter(note => filterTags.every(tag => note.tags.includes(tag)))
    }
    if (filterInput) {
        notes = notes.filter(note => note.title.includes(filterInput))
    }
  return (
    <div>
    <ul>{notes.map(note => <li className="note" key={nanoid()}>
        <p>{note.title}</p>
        <ul>{note?.tags && note.tags.map(tag => <li key={nanoid()}>{tag}</li>)}</ul>
        <p>{note.content}</p>
    </li>)}</ul>
    </div>
  )
}

export default Notes