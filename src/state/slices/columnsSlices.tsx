import React from "react";
import { createSlice, nanoid } from "@reduxjs/toolkit";

export interface ITasks {
  id: string,
  name: string
}

export interface IColumnsSlices {
  id: string;
  name: string;
  tasks: Array<ITasks>
}

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

      const idItem = action.payload;

      return state.map((element) => {
        if (element.id === idItem) {
          const newTaskItem: ITasks = {
            id: nanoid(5),
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

export const {addColumns, deleteColumns, editNameColumns, addColumnsTask, copyColumns} = columnsSlices.actions;
export default columnsSlices.reducer;
