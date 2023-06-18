import React from "react";
import { createSlice } from "@reduxjs/toolkit";

interface IProps {
  id: number;
  name: string;
  title: string
}

const initialState: IProps[] = [
  {id: 1, name: 'hello', title: 'world'},
  {id: 2, name: 'hello', title: 'world'},
  {id: 2, name: 'hello', title: 'world'}
]

const columnsSlices = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    addColumns: (state) => {
      console.log(state)
    }
  }
})

export const {addColumns} = columnsSlices.actions;
export default columnsSlices.reducer;
