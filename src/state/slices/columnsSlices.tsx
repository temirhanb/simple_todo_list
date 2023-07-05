import React from "react";
import { createSlice } from "@reduxjs/toolkit";

interface IProps {
  id: number;
  name: string;
  title: string
}

const initialState: IProps[] = [
  {id: 1, name: 'hello', title: 'world'},
  {id: 2, name: 'hello1', title: 'world1'},
  {id: 3, name: 'hello2', title: 'world2'}
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
        title: 'world' + lengthState
      }
      state.push(newValue)
    },
    deleteColumns: (state, action) => {
      const idItem = action.payload;
      return state.filter(({id}) => id !== idItem)
    }
  }
})

export const {addColumns, deleteColumns} = columnsSlices.actions;
export default columnsSlices.reducer;
