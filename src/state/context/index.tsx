import React, { createContext, ReactElement, ReactPortal, useReducer } from "react";
import reducer, { initialState } from "../reducer";
import { ADD_COLUMN } from "../reducer/type";
import { Props } from "./types";

export const CurrentUserContext = createContext(initialState);

export const Provider = ({children}: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    columns: state.columns,
    addColumn: () => dispatch({type: ADD_COLUMN}),
  };
  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};
