import './movies.css';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/titles/favorite/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
    .then(response => {
      const isFavorite = response.data.some(favorite => favorite.movie === movie.id);
      setIsFavorite(isFavorite);
    })
    .catch(error => {
      console.error(error);
    });

    axios.get('http://localhost:8000/api/titles/watchlater/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
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
        axios.delete('http://localhost:8000/api/titles/favorite/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        })
        .then(() => {
          setIsFavorite(false);
        })
        .catch(error => {
          console.error(error);
        });
      } else {
        axios.post('http://localhost:8000/api/titles/favorite/', 
        {
          imdbId: movie.imdbId,
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
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
        axios.delete('http://localhost:8000/api/titles/watchlater/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        })
        .then(() => {
          setIsWatchLater(false);
        })
        .catch(error => {
          console.error(error);
        });
      } else {
        axios.post('http://localhost:8000/api/titles/watchlater/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        }, {
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
    <li className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <div className="movie-actions">
          <button onClick={() => handleClick("favorite")}>
            <FontAwesomeIcon icon={faStar} className={isFavorite ? "active" : ""} />
          </button>
          <button onClick={() => handleClick("watchlater")}>
          <FontAwesomeIcon icon={faClock} className={isWatchLater ? "active" : ""} />
          </button>
        </div>
      </div>
    </li>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object,
}

export default MovieCard
