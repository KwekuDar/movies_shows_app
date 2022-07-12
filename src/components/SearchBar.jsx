import React from 'react'

export default function SearchBar() {
    const  handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <form action="GET" className='search-form' onSubmit={handleSubmit}>
            <input type="text" placeholder='Search a movie, ,series, or game' className='search-input' />
            <button type='submit' className='submit-btn'> Search</button>
        </form>
      
    </div>
  )
}
