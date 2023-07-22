import React, { useReducer, useContext, createContext } from 'react';

const AddonsContext = createContext();

const initialState = {};

function addonsReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_ADDON':
      return {
        ...state,
        [action.payload.addonName]: action.payload.isChecked,
      };
    default:
      return state;
  }
}

export function useAddonsContext() {
  return useContext(AddonsContext);
}

export function AddonsProvider({ children }) {
  const [selectedAddonsData, dispatch] = useReducer(addonsReducer, initialState);

  return (
    <AddonsContext.Provider value={{ selectedAddonsData, dispatch }}>
      {children}
    </AddonsContext.Provider>
  );
}