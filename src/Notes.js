import React from 'react'
import {nanoid} from "nanoid"

const Notes = ({notes}) => {
  return (
    <div>
    <ul>{notes.map(note => <li key={nanoid()}>
        <p>{note.title}</p>
        <ul>{note?.tags && note.tags.map(tag => <li key={nanoid()}>{tag}</li>)}</ul>
        <p>{note.content}</p>
    </li>)}</ul>
    </div>
  )
}

export default Notes