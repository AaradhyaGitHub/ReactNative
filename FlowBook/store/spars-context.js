import React from "react";
import { createContext, useReducer } from "react";

const DUMMY_SPARS = [
  {
    id: "s11",
    description: "Round 11 with Charles",
    result: "draw",
    date: "2025-06-03", // Store as string
    rating: 6
  },
  {
    id: "s12",
    description: "Round 12 with Jorge",
    result: "won",
    date: "2025-06-05", // Store as string
    rating: 10
  },
  {
    id: "s13",
    description: "Round 13 with Colby",
    result: "lost",
    date: "2025-06-06", // Store as string
    rating: 5
  },
];

export const SparsContext = createContext({
  spars: [],
  addSpar: ({ description, result, date }) => {},
  deleteSpar: (id) => {},
  updateSpar: (id, { description, result, date }) => {}
});

function sparsReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      // Fixed: Include the generated id in the new spar object
      return [{ ...action.payload, id: id }, ...state];

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
  const [sparsState, dispatch] = useReducer(sparsReducer, DUMMY_SPARS);

  function addSparLog(sparData) {
    dispatch({ type: "ADD", payload: sparData });
  }

  function deleteSpar(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateSpar(id, sparData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: sparData } });
  }

  const value = {
    spars: sparsState,
    addSpar: addSparLog,
    deleteSpar: deleteSpar,
    updateSpar: updateSpar
  };

  return (
    <SparsContext.Provider value={value}>{children}</SparsContext.Provider>
  );
}