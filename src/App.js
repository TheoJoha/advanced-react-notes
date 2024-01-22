import { useState } from 'react';
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
      content: "My first note, yay!",
      tags: ["random tag", "cool tag"],
      id: nanoid()
    }
  ])
  const [filteredNotes, setFilteredNotes] = useState(notes || "")
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    tags: ["test tag"],
    id: nanoid()
  })
  const [view, setView] = useState("notes")
  const [tags, setTags] = useState(["js", "bake"])
  const [newTag, setNewTag] = useState("")
  const [filterInput, setFilterInput] = useState("")
  const [filterTags, setFilterTags] = useState([])

  const addNewTag = (e) => {
    e.preventDefault()
    if (!tags.includes(newTag)) {
      setTags(prev => [...prev, newTag])
    }
  }

  const createNewNote = (e) => {
    e.preventDefault()
    console.log(e.target)
    setNotes(prev => [...prev, newNote])
    console.log(newNote)
    console.log(notes)
  }

  /* const addNewNote = (e) => {
    console.log(e.target)
    setNotes(prev => [...prev, newNote])
  } */

  const removeTag = (e) => {
    setTags(prev => prev.filter(tag => tag.id !== e.target.id))
  }

  return (
    <div className="App">
      <h1>Notes</h1>
      <Create
        newNote={newNote}
        setNewNote={setNewNote}
        // addNewNote={addNewNote}
        createNewNote={createNewNote}
      />
      <EditTags tags={tags} setTags={setTags}
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
      <Notes notes={notes}
        filterInput={filterInput}
        filterTags={filterTags}

      />
    </div>
  );
}

export default App;
