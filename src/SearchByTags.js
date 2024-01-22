import React from 'react'
import {nanoid} from "nanoid"

const SearchByTags = ({filterTags, setFilterTags, tags}) => {
  return (
    
    <ul id="searchByTags">
      SelectTags
      {tags.map(tag => <li onClick={() => setFilterTags(prev => {
        if (prev.includes(tag)) {
          return prev.filter(x => x !== tag)
        } else {
          return [...prev, tag]
        }
      })} key={nanoid()}>{tag}</li>)}
    </ul>
  )
}

export default SearchByTags