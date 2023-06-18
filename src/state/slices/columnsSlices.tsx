import React from "react";
import { createSlice } from "@reduxjs/toolkit";

interface IProps {
  columns: Array<number>
}

const initialState: IProps = {
  columns: [0],
}

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
