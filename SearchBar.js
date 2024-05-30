import React from 'react';
import './SearchBar.css';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search image"
      />
    </div>
  );
}

export default SearchBar;

