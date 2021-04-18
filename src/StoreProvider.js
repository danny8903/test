import { createContext, useState } from 'react';

const StoreContext = createContext({});

const { Provider } = StoreContext;

function StoreProvider({ children }) {
  const [showMobileViewNav, toggleMobileViewNav] = useState(false);

  return (
    <Provider value={{ showMobileViewNav, toggleMobileViewNav }}>
      {children}
    </Provider>
  );
}

export { StoreProvider, StoreContext };
