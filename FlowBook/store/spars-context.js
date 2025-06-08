import { createContext, useReducer } from "react";
const DUMMY_SPARS = [
  {
    id: "s1",
    description: "Round 1 with Jose",
    result: "won",
    date: new Date("2025-06-07"),
    rating: 10
  },
  {
    id: "s2",
    description: "Round 2 with Dan",
    result: "lost",
    date: new Date("2025-06-09"),
    rating: 4
  },
  {
    id: "s3",
    description: "Round 3 with Conor",
    result: "lost",
    date: new Date("2025-06-17"),
    rating: 10
  },
  {
    id: "s4",
    description: "Round 1 with Jose",
    result: "draw",
    date: new Date("2025-06-07"),
    rating: 2
  },
  {
    id: "s5",
    description: "Round 2 with Dan",
    result: "draw",
    date: new Date("2025-06-09"),
    rating: 3
  },
  {
    id: "s6",
    description: "Round 3 with Conor",
    result: "won",
    date: new Date("2025-06-17"),
    rating: 5
  },
  {
    id: "s7",
    description: "Round 3 with Conor",
    result: "lost",
    date: new Date("2025-06-17"),
    rating: 10
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

  return <SparsContext.Provider>{children}</SparsContext.Provider>;
}
