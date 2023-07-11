import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export interface ITasks {
  id: number,
  name: string
}

export interface IColumnsSlices {
  id: number;
  name: string;
  tasks: Array<ITasks>
}

const initialState: IColumnsSlices[] = [
  {id: 1, name: 'hello', tasks: [{id: 2, name: 'world'}]},
]

const columnsSlices = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    addColumns: (state) => {
      const lengthState: number = state.length;
      const newValue: IColumnsSlices = {
        id: lengthState + 1,
        name: 'hello' + lengthState,
        tasks: [{id: 2, name: 'world'}],
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

      const idItem = action.payload;

      return state.map((element) => {
        if (element.id === idItem) {
          const newTaskItem: ITasks = {
            id: element.tasks.length + 1,
            name: ''
          }
          const pushNewTask: Array<ITasks> = element.tasks
          return {
            id: element.id,
            name: element.name,
            tasks: [...pushNewTask, newTaskItem]
          }
        }
        return element
      });
    },
  }
})

export const {addColumns, deleteColumns, editNameColumns, addColumnsTask} = columnsSlices.actions;
export default columnsSlices.reducer;
