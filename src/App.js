import logo from './logo.svg';
import './App.scss';
import { ReactComponent as Home } from './assets/home.svg';
import { ReactComponent as Search } from './assets/search.svg';

import SearchBar from './components/SearchBar';

function App() {
  return (
    <main>
      <header className="header">
        <Home className="icon-home" />

        <h1>Home </h1>
        <SearchBar />
      </header>
      <div className="body">body</div>
    </main>
  );
}

export default App;
