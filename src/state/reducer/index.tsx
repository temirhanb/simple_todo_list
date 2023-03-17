import { ADD_COLUMN, IInitialState } from "./type";
import React from "react";

export const initialState = {
  columns: [0],
  addColumn() {

  }
}

const reducer: React.Reducer<IInitialState, any> = (state: any, action: { type: any; }) => {
  switch (action.type) {
    case ADD_COLUMN: {

      const addColumn = [...state.columns, state.columns.length]
      console.log(state, addColumn)
      return {
        ...state, columns: addColumn
      };
    }
    default:
      return state;
  }
}

export default reducer;
