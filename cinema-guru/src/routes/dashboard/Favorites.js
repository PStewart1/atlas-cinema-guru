import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/titles/favorite/')
    .then(response => {
      setMovies(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div className="favorites">
      <h1>Movies you like</h1>
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}

export default Favorites;
