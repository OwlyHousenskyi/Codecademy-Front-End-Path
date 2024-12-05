import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleSearchChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(term);
  };

  return (
    <div className="SearchBar">
      <input 
        type="text" 
        value={term} 
        onChange={handleSearchChange} 
        placeholder="Search for a song, artist, or album"
      />
      <button onClick={handleSearchSubmit}>Search</button>
    </div>
  );
}

export default SearchBar;
