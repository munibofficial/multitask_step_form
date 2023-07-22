import React, { useState, useContext } from 'react';

const CardContext = React.createContext();

export function useCardContext() {
  return useContext(CardContext);
}

export function CardProvider({ children }) {
  const [selectedCardData, setSelectedCardData] = useState(null);

  return (
    <CardContext.Provider value={{ selectedCardData, setSelectedCardData }}>
      {children}
    </CardContext.Provider>
  );
}
