import { nanoid } from "nanoid"
import { useState } from "react"

const Create = ({ handleTagClick, notes, tags, createNewNote, newNote, setNewNote }) => {

    return (
        <div id="createNewNoteDiv" >
            Create New Note Functionality
            <input value={newNote.title} type="text" placeholder="Title..." onChange={(e) => setNewNote(prev => {
                return (
                    {
                        title: e.target.value,
                        content: prev.content,
                        tags: prev.tags,
                        id: prev.id
                    }
                )
            })} id="newNoteTitle" />
            <textarea rows="5" cols="33" value={newNote.content || ""} type="text" placeholder="Content..." onChange={(e) => setNewNote(prev => {
                return (
                    {
                        title: prev.title,
                        content: e.target.value,
                        tags: prev.tags,
                        id: prev.id
                    }
                )
            })} id="newNoteContent" />
            <div id="editTagsInsideOfCreateNewNoteDiv">
                {tags.map(tag => <button value={tag}
                    /* style={{ backgroundColor: selectedTags.includes(tag) ? "greenyellow" : "lightblue" }} */
                    className="createNewNoteTag" key={nanoid()} onClick={e => handleTagClick(e)} >{tag}</button>)}
            </div>
            <button onClick={createNewNote} className="submitButton" type="submit">CREATE NEW NOTE</button>
        </div>
    )
}

export default Create