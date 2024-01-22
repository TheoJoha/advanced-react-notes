import React from 'react'
import {nanoid} from "nanoid"

const EditTags = ({tags, editTags, newTag, addNewTag, setNewTag, removeTag}) => {
  return (
    <div id="editTagsDiv">
        <form onSubmit={addNewTag}>
        <input 
        value={newTag}
        placeholder="New tag..." 
        type="text"
        onChange={(e) => setNewTag(e.target.value)}
        />
        <button type="submit">ADD TAG</button>
        </form>

        <ul>
            {tags.map(tag => <li key={nanoid()}>{tag}
            <button onClick={removeTag}>REMOVE</button>
            </li>)}
        </ul>
    </div>
  )
}

export default EditTags