import './movies.css';
import PropTypes from 'prop-types';
import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';

function Filter({minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle}) {
  return (
    <div className="filter">
      <SearchBar title={title} setTitle={setTitle} />
      <Input
        label="Min Year"
        type="number"
        value={minYear}
        setValue={setMinYear}
      />
      <Input
        label="Max Year"
        type="number"
        value={maxYear}
        setValue={setMaxYear}
      />
      <SelectInput
        label="Sort"
        options={[
          { value: 'latest', label: 'latest' },
          { value: 'oldest', label: 'oldest' },
          { value: 'highestrated', label: 'highestrated' },
          { value: 'lowestrated', label: 'lowestrated' },
        ]}
        value={sort}
        setValue={setSort}
      />
      <div className="genres">
        <h3>Genres</h3>
        <ul>
          <li className="tag" onClick={() => setGenres([])}>
            <p>Clear</p>
          </li>
          <li className="tag" onClick={() => setGenres(['action', 'adventure', 'comedy', 'drama', 'horror', 'sci-fi'])}>
            <p>All</p>
          </li>
          <li className="tag" onClick={() => setGenres(['action'])}>
            <p>Action</p>
          </li>
          <li className="tag" onClick={() => setGenres(['adventure'])}>
            <p>Adventure</p>
          </li>
          <li className="tag" onClick={() => setGenres(['comedy'])}>
            <p>Comedy</p>
          </li>
          <li className="tag" onClick={() => setGenres(['drama'])}>
            <p>Drama</p>
          </li>
          <li className="tag" onClick={() => setGenres(['horror'])}>
            <p>Horror</p>
          </li>
          <li className="tag" onClick={() => setGenres(['sci-fi'])}>
            <p>Sci-Fi</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

Filter.propTypes = {
  minYear: PropTypes.string,
  setMinYear: PropTypes.func,
  maxYear: PropTypes.string,
  setMaxYear: PropTypes.func,
  sort: PropTypes.string,
  setSort: PropTypes.func,
  genres: PropTypes.array,
  setGenres: PropTypes.func,
  title: PropTypes.string,
  setTitle: PropTypes.func,
}

export default Filter
