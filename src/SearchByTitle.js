import React from 'react'

const SearchByTitle = ({setFilterInput, filterInput}) => {
  return (
    <div id="searchByTitleDiv">SearchByTitle
        <input type="text" value={filterInput} 
        onChange={(e) => setFilterInput(e.target.value)}
        />

    </div>
  )
}

export default SearchByTitle