import React from 'react'
import { nanoid } from "nanoid"

const Create = ({ tags, createNewNote, newNote, setNewNote }) => {
    return (
        <div id="createNewNoteDiv">
            Create New Note Functionality
            <form onSubmit={(e) => createNewNote(e)}>
                <input value={newNote.title || ""} type="text" placeholder="Title..." onChange={(e) => setNewNote(prev => {
                    return (
                        {
                            title: e.target.value,
                            content: prev.content,
                            tags: prev.tags,
                            id: nanoid()
                        }
                    )
                })} id="newNoteTitle" />
                {/* <select
                    onChange={(e) => setNewNote(prev => {
                        return (
                            {
                                title: prev.title,
                                content: prev.content,
                                tags: [...e.target.options].filter(({selected}) => selected).map(({value}) => value),
                                id: nanoid()
                            }
                        )
                    })}
                    value={newNote.tags || ""} id="newNoteTags" >
                    {tags && tags.map(tag => <option value={tag}>{tag}</option>)}
                </select> */}
                <input value={newNote.content || ""} type="text" placeholder="Content..." onChange={(e) => setNewNote(prev => {
                    return (
                        {
                            title: prev.title,
                            content: e.target.value,
                            tags: prev.tags,
                            id: nanoid()
                        }
                    )
                })} id="newNoteContent" />
                <button type="submit">CREATE NEW NOTE</button>
            </form>
        </div>
    )
}

export default Create