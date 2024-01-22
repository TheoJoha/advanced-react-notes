import {useState} from 'react'
import { nanoid } from "nanoid"

const Create = ({ tags, createNewNote, newNote, setNewNote }) => {
    const [selectionTags, setSelectionTags] = useState(tags.map(tag => {return  ({"name": tag, "selected": false})}) || [])
    
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
                <div id="editTagsInsideOfCreateNewNoteDiv">
                    {selectionTags && tags.map(tag => <div className="createNewNoteTag" key={nanoid()} onClick={() => setNewNote((prev) => {
                        if (newNote.tags.includes(tag)) {
                            return {
                                title: prev.title,
                                content: prev.content,
                                tags: prev.tags.filter(x => x !== tag),
                                id: nanoid()
                            }
                        } else {
                            return {
                                title: prev.title,
                                content: prev.content,
                                tags: prev.tags.push(tag),
                                id: nanoid()
                            }
                        }
                    })} >{tag}</div>)}
                </div>
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