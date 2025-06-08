import { createContext, useReducer } from "react";

export const SparsContext = createContext({
  spars: [],
  addSpar: ({ description, result, date }) => {},
  deleteSpar: (id) => {},
  update: (id, { description, result, date }) => {}
});

function sparsReducer(state, action){}

export default function SparsContextProvider({ children }) {

    useReducer();
  return <SparsContext.Provider>{children}</SparsContext.Provider>;
}
