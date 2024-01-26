import { useState, useEffect } from 'react';
import Create from './Create';
import EditTags from './EditTags';
import Notes from './Notes';
import SearchByTags from './SearchByTags';
import SearchByTitle from './SearchByTitle';
import { nanoid } from "nanoid"

function App() {
  const [notes, setNotes] = useState([
    {
      title: "Test note 1",
      content: "My first note!",
      tags: [],
      id: nanoid()
    }
  ])
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    tags: [],
    id: nanoid()
  })
  const [tags, setTags] = useState(["bike", "bake"])
  const [newTag, setNewTag] = useState("")
  const [filterInput, setFilterInput] = useState("")
  const [filterTags, setFilterTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])

  useEffect(() => {
    setNewNote({
      title: "",
      content: "",
      tags: [],
      id: nanoid()
    })
  },[notes])

  const addNewTag = (e) => {
    e.preventDefault()
    if (!tags.includes(newTag)) {
      setTags(prev => [...prev, newTag])
    }
  }

  const createNewNote = (e) => {
    console.log(e.target)
    setNotes(prev => [...prev, newNote])
    
    console.log(newNote)
    console.log(notes)
  }

  const handleTagClick = (e) => {
    console.log(e.target.value)
    setSelectedTags(prev => {
      if (prev.includes(e.target.value)) {
        return prev
      } else {
        return [...prev, e.target.value]
      }
    })
    setNewNote((prev) => {
      if (!prev.tags.includes(e.target.value)) {
        return ({
          title: prev.title,
          content: prev.content,
          tags: [...prev.tags, e.target.value],
          id: prev.id
        })
      } else {
        return ({
          title: prev.title,
          content: prev.content,
          tags: prev.tags,
          id: prev.id
        })
      }

    })
    console.log(newNote)
  }

  const removeTag = (e) => {
    setTags(prev => prev.filter(tag => tag.id !== e.target.id))
  }

  return (
    <div className="App">
      <h1>Notes</h1>
      <Create
        newNote={newNote}
        setNewNote={setNewNote}
        createNewNote={createNewNote}
        tags={tags}
        handleTagClick={handleTagClick}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <EditTags
        tags={tags} setTags={setTags}
        newTag={newTag}
        setNewTag={setNewTag}
        addNewTag={addNewTag}
        removeTag={removeTag}
      />
      <SearchByTitle filterInput={filterInput}
        setFilterInput={setFilterInput}
      />
      <SearchByTags
        filterTags={filterTags}
        setFilterTags={setFilterTags}
        tags={tags}
      />
      <Notes
        notes={notes}
        filterInput={filterInput}
        filterTags={filterTags}
        setNotes={setNotes}
      />
    </div>
  );
}

export default App;
