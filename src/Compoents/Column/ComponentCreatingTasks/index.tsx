import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  FormContainerCreatingTask,
  FormContainerCreatingTaskButtons,
  FormContainerCreatingTaskInput,
  TasksAddButton
} from "../../../style/column";
import { Button } from "@mui/material";
import { useCreatingTask } from "./hook/useCreatingTask";
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
  id: string;
  tasks: Array<{ id: string, name: string }>
}

export const ComponentCreatingTasks: React.FC<IProps> = ({id, tasks}) => {

  const {
    createTasks,
    isOpenForm,
    handlerIsOpenForm,
    handlerIsCloseForm,
  } = useCreatingTask({id, tasks})

  return (
    <div>
      {isOpenForm ? (
        <FormContainerCreatingTask
          onSubmit={createTasks.handleSubmit}>
          <FormContainerCreatingTaskInput
            onChange={createTasks.handleChange}
            value={createTasks.values.name}
            id="name"
            variant="outlined"
            sx={{
              input: {color: '#fff',}
            }}
            error={typeof createTasks.errors.name === 'string'}
            helperText={createTasks.errors.name}
          />
          <FormContainerCreatingTaskButtons>
            <Button type={'submit'} variant="contained">
              Добавить задачу
            </Button>
            <CloseIcon onClick={handlerIsCloseForm}/>
          </FormContainerCreatingTaskButtons>

        </FormContainerCreatingTask>
      ) : (
        <TasksAddButton onClick={handlerIsOpenForm}>
          <AddCircleOutlineIcon/>
          <span>Добавить задачу</span>
        </TasksAddButton>
      )}
    </div>
  )
}
