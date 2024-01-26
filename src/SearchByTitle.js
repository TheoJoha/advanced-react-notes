import React from 'react'

const SearchByTitle = ({setFilterInput, filterInput}) => {
  return (
    <div id="searchByTitleDiv">
        <input placeholder="Search Note by Title..." type="text" value={filterInput} 
        onChange={(e) => setFilterInput(e.target.value)}
        />

    </div>
  )
}

export default SearchByTitle