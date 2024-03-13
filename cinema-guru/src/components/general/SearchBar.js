import './general.css';
import PropTypes from 'prop-types';
import React from 'react';

function SearchBar({ title, setTitle }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Search..."
      />
    </div>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.string,
}

export default SearchBar