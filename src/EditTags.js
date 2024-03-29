import { nanoid } from "nanoid"
import {useState} from "react"

const EditTags = ({ tags, setTags, newTag, addNewTag, setNewTag }) => {
  const [showEditTags, setShowEditTags] = useState(false)

  if (showEditTags) {
    return (
      <div id="editTagsDiv">
        <button onClick={() => setShowEditTags(prev => !prev)}>{showEditTags === false ? "SHOW EDIT TAGS" : "HIDE EDIT TAGS"}</button>
        <form onSubmit={addNewTag}>
          <input
            value={newTag}
            placeholder="New tag..."
            type="text"
            onChange={(e) => setNewTag(e.target.value)}
          />
          <button style={{backgroundColor: "lightgreen"}} type="submit">ADD TAG</button>
        </form>
        <ul>
          {tags.map(tag => <button key={nanoid()} className="removeTag" onClick={() => setTags(prev => prev.filter(x => x !== tag))}>{tag}</button>
          )}
        </ul>
      </div>
    )
  } else {
    return <div id="editTagsDiv">
    <button onClick={() => setShowEditTags(prev => !prev)}>SHOW EDIT TAGS</button>
  </div>
  }
}

export default EditTags