import React, { createContext, useState } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
  const [token, setToken] = useState('token');

  const value = {
    token,
    setToken: (token) => {
      setToken(token);
    },
  };
  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  );
};
export default {
  Provider,
  Consumer: Context.Consumer,
};
