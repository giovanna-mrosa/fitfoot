import React, { createContext, useEffect, useState } from "react";

export const CounterCartContext = createContext();

export const CounterCartContextProvider = ({ children }) => {
  const [countCart, setCountCart] = useState(+window.localStorage.getItem('@countCart') || 0);

  useEffect(() => {
    window.localStorage.setItem('@countCart', countCart)
  }, [countCart]);

  return (
    <CounterCartContext.Provider value={[countCart, setCountCart]}>
      {children}
    </CounterCartContext.Provider>
  );
};