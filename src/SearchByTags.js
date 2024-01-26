import React from 'react'
import {nanoid} from "nanoid"

const SearchByTags = ({filterTags, setFilterTags, tags}) => {
  return (
    <div id="searchByTags">
      SEARCH BY TAGS:
      {tags.map(tag => <button className="selectNotesTag" style={{backgroundColor: filterTags.includes(tag) ? "lightgreen" : "lightblue"}} onClick={() => setFilterTags(prev => {
        if (prev.includes(tag)) {
          return prev.filter(x => x !== tag)
        } else {
          return [...prev, tag]
        }
      })} key={nanoid()}>{tag}</button>)}
    </div>
  )
}

export default SearchByTags