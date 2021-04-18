import './NavList.scss';

function NavList() {
  return (
    <nav className="nav-links">
      <a className="nav-links__link" href="#home">
        Home
      </a>
      <a className="nav-links__link" href="#news">
        News
      </a>
      <a className="nav-links__link" href="#contact">
        Contact
      </a>
    </nav>
  );
}

export default NavList;
