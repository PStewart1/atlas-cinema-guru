import './movies.css';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/favorite/')
    .then(response => {
      const isFavorite = response.data.some(favorite => favorite.movie === movie.id);
      setIsFavorite(isFavorite);
    })
    .catch(error => {
      console.error(error);
    });

    axios.get('http://localhost:8000/api/watchlater/')
    .then(response => {
      const isWatchLater = response.data.some(watchlater => watchlater.movie === movie.id);
      setIsWatchLater(isWatchLater);
    })
    .catch(error => {
      console.error(error);
    });
  });

  function handleClick(type) {
    if (type === "favorite") {
      if (isFavorite) {
        axios.delete('http://localhost:8000/api/favorite/')
        .then(() => {
          setIsFavorite(false);
        })
        .catch(error => {
          console.error(error);
        });
      } else {
        axios.post('http://localhost:8000/api/favorite/', {
          movie: movie.id,
        })
        .then(() => {
          setIsFavorite(true);
        })
        .catch(error => {
          console.error(error);
        });
      }
    } else {
      if (isWatchLater) {
        axios.delete('http://localhost:8000/api/watchlater/')
        .then(() => {
          setIsWatchLater(false);
        })
        .catch(error => {
          console.error(error);
        });
      } else {
        axios.post('http://localhost:8000/api/watchlater/', {
          movie: movie.id,
        })
        .then(() => {
          setIsWatchLater(true);
        })
        .catch(error => {
          console.error(error);
        });
      }
    }
  }

  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <div className="movie-actions">
          <button onClick={() => handleClick("favorite")}>
            <FontAwesomeIcon icon="star" className={isFavorite ? "active" : ""} />
          </button>
          <button onClick={() => handleClick("watchlater")}>
            <FontAwesomeIcon icon="clock" className={isWatchLater ? "active" : ""} />
          </button>
        </div>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object,
}

export default MovieCard
