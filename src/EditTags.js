import React from 'react'

const EditTags = ({tags, editTags, newTag, addNewTag, setNewTag, removeTag}) => {
  return (
    <div>
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
            {tags.map(tag => <li>{tag}
            <button onClick={removeTag}>REMOVE</button>
            </li>)}
        </ul>
    </div>
  )
}

export default EditTags