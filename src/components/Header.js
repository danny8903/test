import { useContext } from 'react';
import { ReactComponent as Menu } from '../assets/menu.svg';
import { ReactComponent as Close } from '../assets/close.svg';
import { ReactComponent as Home } from '../assets/home.svg';
import './Header.scss';
import SearchBar from './SearchBar';
import { StoreContext } from '../StoreProvider';

function Header() {
  const { showMobileViewNav, toggleMobileViewNav } = useContext(StoreContext);

  return (
    <header className="header">
      {!showMobileViewNav ? (
        <button
          className="icon-menu"
          tabIndex="0"
          type="button"
          aria-label="open navigation"
          onClick={() => toggleMobileViewNav(true)}
        >
          <Menu />
        </button>
      ) : (
        <button
          className="icon-close"
          tabIndex="0"
          type="button"
          aria-label="close navigation"
          onClick={() => toggleMobileViewNav(false)}
        >
          <Close />
        </button>
      )}

      <Home className="icon-home" />

      <h1>Home </h1>
      <SearchBar />
    </header>
  );
}

export default Header;
