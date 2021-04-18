import './App.scss';

import Header from './components/Header';
import Home from './pages/Home';
import NavList from './pages/NavList';

function App() {
  return (
    <main>
      <Header />
      <div className="body">
        <Home />
        <NavList />
      </div>
    </main>
  );
}

export default App;
