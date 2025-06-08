import React from "react";
import { createContext, useReducer } from "react";
const DUMMY_SPARS = [
  {
    id: "s1",
    description: "Round 1 with Jose",
    result: "won",
    date: new Date("2025-01-12"),
    rating: 8
  },
  {
    id: "s2",
    description: "Round 2 with Dan",
    result: "lost",
    date: new Date("2025-02-23"),
    rating: 3
  },
  {
    id: "s3",
    description: "Round 3 with Conor",
    result: "won",
    date: new Date("2025-03-05"),
    rating: 9
  },
  {
    id: "s4",
    description: "Round 4 with Max",
    result: "draw",
    date: new Date("2025-04-18"),
    rating: 5
  },
  {
    id: "s5",
    description: "Round 5 with Nate",
    result: "won",
    date: new Date("2025-05-03"),
    rating: 7
  },
  {
    id: "s6",
    description: "Round 6 with Khabib",
    result: "lost",
    date: new Date("2025-05-29"),
    rating: 2
  },
  {
    id: "s7",
    description: "Round 7 with Dustin",
    result: "draw",
    date: new Date("2025-06-01"),
    rating: 4
  },
  {
    id: "s8",
    description: "Round 8 with Tony",
    result: "won",
    date: new Date("2025-06-08"),
    rating: 10
  },
  {
    id: "s9",
    description: "Round 9 with Justin",
    result: "lost",
    date: new Date("2025-06-5"),
    rating: 3
  },
  {
    id: "s10",
    description: "Round 10 with Islam",
    result: "won",
    date: new Date("2025-06-4"),
    rating: 9
  },
  {
    id: "s11",
    description: "Round 11 with Charles",
    result: "draw",
    date: new Date("2025-06-03"),
    rating: 6
  },
  {
    id: "s12",
    description: "Round 12 with Jorge",
    result: "won",
    date: new Date("2025-06-05"),
    rating: 10
  },
  {
    id: "s13",
    description: "Round 13 with Colby",
    result: "lost",
    date: new Date("2025-06-06"),
    rating: 5
  },
  {
    id: "s14",
    description: "Round 14 with Leon",
    result: "won",
    date: new Date("2025-06-07"),
    rating: 8
  },
  {
    id: "s15",
    description: "Round 15 with Gilbert",
    result: "lost",
    date: new Date("2025-06-02"),
    rating: 4
  },
  {
    id: "s16",
    description: "Round 16 with Belal",
    result: "draw",
    date: new Date("2025-06-04"),
    rating: 6
  },
  {
    id: "s17",
    description: "Round 17 with Shavkat",
    result: "won",
    date: new Date("2025-06-02"),
    rating: 9
  },
  {
    id: "s18",
    description: "Round 18 with Sean",
    result: "lost",
    date: new Date("2025-05-21"),
    rating: 3
  },
  {
    id: "s19",
    description: "Round 19 with Kevin",
    result: "draw",
    date: new Date("2025-04-4"),
    rating: 5
  },
  {
    id: "s20",
    description: "Round 20 with Paddy",
    result: "won",
    date: new Date("2025-01-15"),
    rating: 7
  },
  {
    id: "s21",
    description: "Round 21 with Jake",
    result: "lost",
    date: new Date("2025-02-16"),
    rating: 2
  }
];

export const SparsContext = createContext({
  spars: [],
  addSpar: ({ description, result, date }) => {},
  deleteSpar: (id) => {},
  update: (id, { description, result, date }) => {}
});

function sparsReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload }, ...state];

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
