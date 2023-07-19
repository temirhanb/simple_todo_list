import React from "react";
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { IColumnsSlices } from "../libs";


const initialState: IColumnsSlices[] = [
  {id: 'column-id-1', name: 'hello', tasks: [{id: 'task-id-1', name: 'world'}]},
]

const columnsSlices = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    addColumns: (state) => {

      const lengthState: number = state.length;

      const newId = nanoid(5);

      const newValue: IColumnsSlices = {
        id: newId,
        name: 'hello' + lengthState,
        tasks: [{id: newId, name: 'world'}],
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
            tasks: element.tasks
          }
        }
        return element
      });
    },
    copyColumns: (state, action) => {
      const copyColumn = action.payload;
      state.push(copyColumn)
    },
    addColumnsTask: (state, action) => {

      const idItem = action.payload.id;
      const newTasks = action.payload.tasks

      return state.map((element) => {
        if (element.id === idItem) {

          return {
            id: element.id,
            name: element.name,
            tasks: newTasks
          }
        }
        return element
      });
    },
  }
})

export const {addColumns, deleteColumns, editNameColumns, addColumnsTask, copyColumns} = columnsSlices.actions;
export default columnsSlices.reducer;
