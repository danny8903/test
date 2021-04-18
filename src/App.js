import './App.scss';

import Header from './components/Header';
import Home from './pages/Home';
import NavList from './pages/NavList';
import { StoreProvider } from './StoreProvider';

function App() {
  return (
    <StoreProvider>
      <main>
        <Header />
        <div className="body">
          <Home />
          <NavList />
        </div>
      </main>
    </StoreProvider>
  );
}

export default App;
