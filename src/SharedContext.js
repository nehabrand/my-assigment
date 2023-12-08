import React, { createContext, useState } from 'react';

export const SharedContext = createContext();

export const SharedProvider = ({ children }) => {
  const [registeredUserData, setRegisteredUserData] = useState({});

  return (
    <SharedContext.Provider value={{ registeredUserData, setRegisteredUserData }}>
      {children}
    </SharedContext.Provider>
  );
};
