import React from "react";
import { createContext, useReducer } from "react";

export const SparsContext = createContext({
  spars: [],
  addSpar: ({ description, result, date }) => {},
  setSpars: (spars) => {},
  deleteSpar: (id) => {},
  updateSpar: (id, { description, result, date }) => {}
});

function sparsReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      // Fixed: Include the generated id in the new spar object
      return [{ ...action.payload, id: id }, ...state];

    case "SET":
      return action.payload;

    case "UPDATE":
      const updatableSparIndex = state.findIndex(
        (spar) => spar.id === action.payload.id
      );
      const updatableSpar = state[updatableSparIndex];
      const updatedItem = { ...updatableSpar, ...action.payload.data };
      const updatedSpars = [...state];
      updatedSpars[updatableSparIndex] = updatedItem;
      return updatedSpars;

    case "DELETE":
      return state.filter((spar) => spar.id !== action.payload);
    default:
      return state;
  }
}

export default function SparsContextProvider({ children }) {
  const [sparsState, dispatch] = useReducer(sparsReducer, []);

  function addSparLog(sparData) {
    dispatch({ type: "ADD", payload: sparData });
  }

  function setSpars(spars) {
    dispatch({ type: "SET", payload: spars });
  }

  function deleteSpar(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateSpar(id, sparData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: sparData } });
  }

  const value = {
    spars: sparsState,
    setSpars: setSpars,
    addSpar: addSparLog,
    deleteSpar: deleteSpar,
    updateSpar: updateSpar
  };

  return (
    <SparsContext.Provider value={value}>{children}</SparsContext.Provider>
  );
}
