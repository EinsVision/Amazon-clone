import React, { createContext, useReducer } from 'react';

// I need React context API to track the basket (setup data layer)

// This is the data layer
export const StateContext = createContext();

// Build A provider
export const StateProvider = ({ reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);