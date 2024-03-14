import './general.css';
import PropTypes from 'prop-types';
import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchBar({ title, setTitle }) {
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
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