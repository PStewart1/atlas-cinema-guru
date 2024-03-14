import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function WatchLater() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/titles/watchlater/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
    .then(response => {
      setMovies(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div className="watch-later">
      <h1>Movies to watch later</h1>
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}

export default WatchLater;
