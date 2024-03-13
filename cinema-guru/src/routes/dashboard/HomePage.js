import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  function loadMovies(page) {
    axios.get(`http://localhost:8000/api/titles/advancedsearch/?page=${page}&min_year=${minYear}&max_year=${maxYear}&sort=${sort}&genres=${genres.join(',')}&title=${title}`)
    .then(response => {
      setMovies(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }

  useEffect(() => {
    loadMovies(page);
  }, [minYear, maxYear, genres, sort, title, page]);

  return (
    <div className="home-page">
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        sort={sort}
        setSort={setSort}
        genres={genres}
        setGenres={setGenres}
        title={title}
        setTitle={setTitle}
      />
      <div className="movies">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</Button>
      <Button onClick={() => setPage(page + 1)}>Next</Button>
    </div>
  );
}

export default HomePage;
