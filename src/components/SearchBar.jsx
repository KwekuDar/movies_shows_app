import React, { useState } from 'react'

export default function SearchBar({search, setSearch}) {

    // const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleUserInput = (e)=> {
        setSearch(e.target.value)
    }
    
  return (
    <div>
        <form action="GET" className='search-form' onSubmit={handleSubmit}>
            <input type="text" value={search} onChange={handleUserInput} placeholder='Search a movie, ,series, or game' className='search-input' />
            <button type='submit' className='submit-btn'> Search</button>
        </form>
      
    </div>
  )
}
