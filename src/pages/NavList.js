import { useContext } from 'react';

import './NavList.scss';
import { StoreContext } from '../StoreProvider';

function NavList() {
  const { showMobileViewNav, toggleMobileViewNav } = useContext(StoreContext);

  return (
    <nav className={`nav-links ${showMobileViewNav && 'mobileView'}`}>
      <a
        className="nav-links__link"
        href="#home"
        onClick={() => toggleMobileViewNav(false)}
      >
        Home
      </a>
      <a
        className="nav-links__link"
        href="#news"
        onClick={() => toggleMobileViewNav(false)}
      >
        News
      </a>
      <a
        className="nav-links__link"
        href="#contact"
        onClick={() => toggleMobileViewNav(false)}
      >
        Contact
      </a>
    </nav>
  );
}

export default NavList;
