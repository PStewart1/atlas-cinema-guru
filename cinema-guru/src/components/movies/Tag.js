import './movies.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Tag({ genre, filter, genres, setGenres }) {
  const [selected, setSelected] = useState(false);

  function handleTag() {
    if (selected) {
      setGenres(genres.filter((g) => g !== genre.toLowerCase()));
    } else {
      setGenres([...genres, genre.toLowerCase()]);
    }
    setSelected(!selected);
  }

  return (
    <li className={`tag ${selected ? 'active-tag' : ''}`} onClick={() => {
      if (filter) handleTag()
    }}>
      <p>{genre}</p>
    </li>
  )
}

Tag.propTypes = {
  genre: PropTypes.string,
  filter: PropTypes.bool,
  genres: PropTypes.array,
  setGenres: PropTypes.func,
}

export default Tag
