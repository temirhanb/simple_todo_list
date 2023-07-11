import React from "react";
import { useDispatch } from "react-redux";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { addColumnsTask } from "../../../state/slices/columnsSlices";
import { TasksAddButton } from "../../../style/column";

interface IProps {
  id: number
}

export const ButtonAddTask: React.FC<IProps> = ({id}) => {
  const dispatch = useDispatch();

  const handlerAddTask = () => {
    dispatch(addColumnsTask(id))
  }
  return (
    <TasksAddButton onClick={handlerAddTask}>
      <AddCircleOutlineIcon/>
      <span>Добавить задачу</span>
    </TasksAddButton>
  )
}
