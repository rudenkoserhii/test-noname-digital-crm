import { createContext, useContext, useState } from 'react';

export const ThrowContext = createContext();

export const useAuth = () => {
  return useContext(ThrowContext);
};

export const Context = ({children}) => {

  const [currentUser, setCurrentUser] = useState(null);

  return (
    <ThrowContext.Provider value={{
 currentUser, setCurrentUser
 }}>
        {children}
    </ThrowContext.Provider>
  );
};