import React from "react";
import { createSlice } from "@reduxjs/toolkit";

interface IProps {
  id: number;
  name: string;
}

const initialState: IProps[] = [
  {id: 1, name: 'hello'},
]

const columnsSlices = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    addColumns: (state) => {
      const lengthState: number = state.length;
      const newValue: IProps = {
        id: lengthState + 1,
        name: 'hello' + lengthState,
      }
      state.push(newValue)
    },
    deleteColumns: (state, action) => {
      const idItem = action.payload;
      return state.filter(({id}) => id !== idItem)
    },
    editNameColumns: (state, action) => {
      const idItem = action.payload.id;
      const nameItem = action.payload.name;

      return state.map((element) => {
        if (element.id === idItem) {
          return {
            id: element.id,
            name: nameItem,
          }
        }
        return element
      });
    }
  }
})

export const {addColumns, deleteColumns, editNameColumns} = columnsSlices.actions;
export default columnsSlices.reducer;
