import { createContext, useState, useEffect } from 'react';

export const ThrowContext = createContext('dark');

export const Context = ({children}) => {

  return (
    <ThrowContext.Provider value={{ }}>
        {children}
    </ThrowContext.Provider>
  );
};