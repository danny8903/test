import { ReactComponent as Home } from '../assets/home.svg';
import './Header.scss';
import SearchBar from './SearchBar';

function Header() {
  return (
    <header className="header">
      <Home className="icon-home" />

      <h1>Home </h1>
      <SearchBar />
    </header>
  );
}

export default Header;
