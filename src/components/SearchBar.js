import { ReactComponent as Search } from '../assets/search.svg';
import './SearchBar.scss';

function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="search-bar-wrapper">
        <input
          placeholder="Search…"
          aria-label="Search"
          type="search"
          autoComplete="off"
        />

        <div className="search-icon">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
