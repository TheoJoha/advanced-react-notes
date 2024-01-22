import React from 'react'
import { nanoid } from "nanoid"

const Create = ({ tags, addNewNote, newNote, setNewNote }) => {
    return (
        <div>
            Create New Note
            <form onSubmit={addNewNote}>
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
                <select
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
                </select>
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

            </form>
        </div>
    )
}

export default Create